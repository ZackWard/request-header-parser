var express = require('express');
var app = express();
var helmet = require('helmet');
var port = 3001;

app.use(helmet());

app.get('/api/whoami', function (req, res) {
    res.json({
        ipaddress: req.ip,
        language: req.get('Accept-Language'),
        software: req.get('User-Agent')
    });
});

app.listen(port, 'localhost');
console.log("Request Header Parser Microservice listening on port " + port);

module.exports = app;