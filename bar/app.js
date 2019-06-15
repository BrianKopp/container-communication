const express = require('express');

const app = express();
app.get('/', (barRequest, barResponse) => {
    barResponse.send('Hello from BAR');
});

module.exports = app;
