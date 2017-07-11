var express = require('express');
var app = express();
var port = 3000;

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/device-tracker", function (err) {
    if (err) {
        console.log("DB Not Connected");
    } else {
        console.log("DB Connected");
    }
    
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var routes = require('./routes.js')(app);

var server = app.listen(port, function() {
    console.log('Server running at http://127.0.0.1:3000');
});