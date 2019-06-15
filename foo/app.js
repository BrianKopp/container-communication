const request = require('request');
const express = require('express');

const app = express();
app.get('/', (fooRequest, fooResponse) => {
    request.get(process.env.BAR_URL, { json: true }, (err, barResponse, barBody) => {
        if (err) {
            console.log(err);
            fooResponse.status(500);
            fooResponse.send('error in BAR request');
        } else {
            console.log('successfully received BAR response');
            fooResponse.status(barResponse.statusCode);
            fooResponse.send(barBody);
        }
    });
});

module.exports = app;
