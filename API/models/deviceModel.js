var mongoose = require('mongoose');

var deviceSchema = mongoose.Schema({
    name: String,
    brand: String,
    type: String,
    operatingSystem: String,
    location: String,
    quantity: Number,
    product: String,
    dateCreated: {type: Date, default: Date.now},
    lastUpdated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Devices', deviceSchema);