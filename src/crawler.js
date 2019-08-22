/*
 * @Author: carson.wang 
 */

const Weather = require('./weather_model');
const config = require('./config');
const request = require('request');
const CronJob = require('cron').CronJob;

const crawler_job = new CronJob('0 0 */1 * * *', () => {
	const d = new Date();
    console.log('Crawl weather data every 1 hr:', d);
    const options = {
        url: `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${config.ACCESS_KEY}`,
        headers: {
            'accept': 'application/json',
        },
    };

    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body)['records']['location'];
            const cities = ['臺北市', '新北市', '桃園市'];
            const clean_data = cities.map(city => data.filter(({
                parameter
            }) => parameter[0].parameterValue == city).map(({
                time,
                weatherElement,
                parameter
            }) => ({
                obs_time: time.obsTime,
                weather_elements: weatherElement,
                city: parameter[0].parameterValue,
                city_sn: parameter[1].parameterValue,
                town: parameter[2].parameterValue,
                town_sn: parameter[3].parameterValue,
            })));
            
            for(let i =0; i < clean_data.length; i++) {
                clean_data[i].forEach((raw_data) => {
                    new Weather(raw_data).save().then(() => console.log('save successfully'));
                  })
            }
        }
    });

});

module.exports = crawler_job;
