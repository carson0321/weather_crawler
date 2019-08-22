/*
 * @Author: carson.wang
 */

const express = require('express');
const Weather = require('./weather_model');

const router = express.Router();

router.get('/get_weather/:city', (req, res) => {
    const city = req.params.city;
    return Weather.findOne({'city': city}, (err, data) =>{
        return res.json(data);
    });
});

module.exports = router;
