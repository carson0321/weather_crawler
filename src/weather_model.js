/*
 * @Author: carson.wang
 */

const config = require('./config');
const mongoose = require('mongoose');

const db_url = `mongodb://${config.DB_USERNAME}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.DB_PORT} /${config.DB_NAME}`;
mongoose.connect(db_url, { useNewUrlParser: true }, (err, res) => {
    // if(! err)  console.log(res);
});

const weather_schema = new mongoose.Schema({
    _id: String,
    city: String,
    city_sn: Number,
    town: String,
    town_sn: Number,
    lat: Number,
    lon: Number,
    location_name: String,
    station_id: String,
    obs_time:  String,
    weather_elements:[{elementName: String, elementValue: String}],
    update_date: { type: Date, default: Date.now },
}, {versionKey: false});

const Weather = mongoose.model('Weather', weather_schema);

module.exports = Weather;
