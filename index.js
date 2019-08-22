/*
 * @Author: carson.wang 
 */

const express = require('express');
const config = require('./src/config');
const router =  require('./src/api_router');
const crawler_job = require('./src/crawler');

const app = express();
const port = config.API_PORT;

crawler_job.start();

app.use('/', router);

app.listen(port, () => {
   console.log(`server start on http://localhost:${port}, port`)
});

module.exports = app
