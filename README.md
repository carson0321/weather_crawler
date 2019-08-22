# Weather crawler

Simple weather crawler from open weather data API (CWB) that we can access to current weather data.

P.S. CWB's API is https://opendata.cwb.gov.tw/dist/opendata-swagger.html

## How to use

1. `cp .env.example .env`
2. `docker-compose up -d`

To be continued

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