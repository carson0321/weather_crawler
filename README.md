# Weather crawler

Simple weather crawler that we can access to current weather data from open weather data API (CWB)

P.S. CWB's API: https://opendata.cwb.gov.tw/dist/opendata-swagger.html

## How to use

1. `cp .env.example .env`
2. `docker-compose up -d`
3. `yarn install`
4. `yarn start`
5. `curl -X GET "http://localhost:8080/get_weather/%E8%87%BA%E5%8C%97%E5%B8%82"` (臺北市)

Notice: You must provide a vailad **ACCESS_KEY** for open weather data API in **.env**


## Environment

* node 10.16.3
* yarn 1.17.3
* docker 19.03.1
* docker-compose 1.24.1

## LICENSE

```
MIT License

Copyright (c) 2019 Carson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```