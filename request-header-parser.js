var express = require('express');
var app = express();
var helmet = require('helmet');
var port = 3001;

app.use(helmet());

app.get('/api/whoami', function (req, res) {
    
    // App will be deployed behind an Nginx reverse proxy, so we need this to get the original IP address if we're in production
    var remoteIP = req.get('X-Real-IP') == null ? req.ip : req.get('X-Real-IP');

    // Set CORS headers
    res.set('Access-Control-Allow-Origin', '*');
    
    res.json({
        ipaddress: remoteIP,
        language: req.get('Accept-Language'),
        software: req.get('User-Agent')
    });
});

app.listen(port, 'localhost');
console.log("Request Header Parser Microservice listening on port " + port);

module.exports = app;