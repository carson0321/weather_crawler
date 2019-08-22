/*
 * @Author: carson.wang 
 */

const express = require('express');
const Weather = require('./src/weather_model');
const config = require('./src/config');
const crawler_job = require('./src/crawler');

crawler_job.start()

const app = express();
const port = config.API_PORT;

app.get('/', (req, res) => {
    const city = req.query.city;
    return Weather.findOne({'city': city}, (err, data) =>{
        return res.json(data);
    });
});

app.listen(port, () => {
   console.log(`server start on http://localhost:${port}, port`)
});
