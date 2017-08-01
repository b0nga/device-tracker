var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    deviceId: String,
    dateCreated: {type: Date, default: Date.now},
    lastUpdated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Locations', locationSchema);