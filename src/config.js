/*
 * @Author: carson.wang
 * @Date: 2019-08-21 13:05:21 
 * @Last Modified time: 2019-08-21 13:05:21 
 */

const Joi = require('joi');
require('dotenv').config();

const env_schema = Joi.object().keys({
    NODE_ENV: Joi.string().default('development').allow(['development', 'production']),
    ACCESS_KEY: Joi.string().required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().integer().min(0).max(65535).required(),
    DB_NAME: Joi.string().required(),
    DB_USERNAME: Joi.string().alphanum().min(6).max(16).required(),
    DB_PASSWORD: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required(),
    API_PORT: Joi.number().integer().min(0).max(65535).required(),
}).unknown().required();

const { error, value: env_vars } = Joi.validate(process.env, env_schema);

if(error){
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    NODE_ENV: env_vars.NODE_ENV,
    ACCESS_KEY: env_vars.ACCESS_KEY,
    DB_HOST: env_vars.DB_HOST,
    DB_PORT: env_vars.DB_PORT,
    DB_NAME: env_vars.DB_NAME,
    DB_USERNAME: env_vars.DB_USERNAME,
    DB_PASSWORD: env_vars.DB_PASSWORD,
    API_PORT: env_vars.API_PORT,
}

module.exports = config;
