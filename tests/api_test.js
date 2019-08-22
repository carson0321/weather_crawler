/*
 * @Author: carson.wang
 */

const app = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

chai.should();describe('Weathers', () => {
    describe('GET /', () => {
        const cities = ['臺北市', '新北市', '桃園市'];
        for (let i=0; i < cities.length; i++){
            it(`should get weather data in ${cities[i]} city`, (done) => {
                chai.request(app).get(`/get_weather/${encodeURI(cities[i])}`).end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
            });
        }
    });
});
