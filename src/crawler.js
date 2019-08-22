/*
 * @Author: carson.wang 
 */

const Weather = require('./weather_model');
const config = require('./config');
const request = require('request');
const crypto = require('crypto');
const CronJob = require('cron').CronJob;

const crawl = async(api_name) => {
    const options = {
        url: `https://opendata.cwb.gov.tw/api/v1/rest/datastore/${api_name}?Authorization=${config.ACCESS_KEY}`,
        headers: {
            'accept': 'application/json',
        },
    };
    await request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body)['records']['location'];
            const cities = ['臺北市', '新北市', '桃園市'];
            const clean_data = cities.map(city => data.filter(({
                parameter
            }) => parameter[0].parameterValue == city).map(({
                lat,
                lon,
                locationName,
                stationId,
                time,
                weatherElement,
                parameter,
            }) => ({
                _id: crypto.createHash('md5').update(`${time.obsTime}${stationId}`).digest('hex'),
                lat,
                lon,
                location_name: locationName,
                station_id: stationId,
                obs_time: time.obsTime,
                weather_elements: weatherElement,
                city: parameter[0].parameterValue,
                city_sn: parameter[1].parameterValue,
                town: parameter[2].parameterValue,
                town_sn: parameter[3].parameterValue,
            })));
            
            for(let i=0; i < clean_data.length; i++) {
                clean_data[i].forEach((raw_data) => {
                    new Weather(raw_data).save().then(() => console.log('save successfully'));
                  })
            }
        }
        else {
            throw new Error(`status_code: ${response.statusCode} An error occurred: ${error}`);
        }
    });
};


const crawler_job = new CronJob('0 0 */1 * * *', () => {
	const d = new Date();
    console.log('Crawl weather data every 1 hr:', d);
    // crawl('O-A0001-001');
    crawl('O-A0003-001');
});

module.exports = crawler_job;
