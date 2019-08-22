/*
 * @Author: carson.wang
 * @Date: 2019-08-22 15:37:03 
 * @Last Modified time: 2019-08-22 15:37:03 
 */

const config = require('./config');
const mongoose = require('mongoose');

const db_url = `mongodb://${config.DB_USERNAME}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.DB_PORT} /${config.DB_NAME}`;
mongoose.connect(db_url, { useNewUrlParser: true }, (err, res) => {
    // if(! err)  console.log(res);
});

const weather_schema = new mongoose.Schema({
    city: String,
    city_sn: Number,
    town: String,
    town_sn: Number,
    obs_time:  String,
    weather_elements:[{elementName: String, elementValue: String}],
    update_date: { type: Date, default: Date.now },
});

const Weather = mongoose.model('Weather', weather_schema);

module.exports = Weather;
