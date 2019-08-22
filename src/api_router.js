/*
 * @Author: carson.wang
 */

const express = require('express');
const Weather = require('./weather_model');

const router = express.Router();

router.param('city', (req, res, next, city) => {
    const valid_cities = ['臺北市', '新北市', '桃園市']
    if(!valid_cities.includes(city)) {
        return res.send({message: 'Bad Request.', status_code: 400 });
    }
    req.city = city;
    next();
});

router.get('/get_weather/:city', (req, res) => {
    return Weather.find({'city': req.city}, (err, data) =>{
        if(err){
            throw new Error(`Mongo find error: ${err}`);
        }
        return data.length > 0 ? res.json({...data, message: 'OK', status_code: 200}) : res.send({message: 'No Content. No found weather data in city', status_code: 204 });
    });
});

module.exports = router;
