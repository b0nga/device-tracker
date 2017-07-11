var _ = require('lodash');
var Devices = require('./models/deviceModel.js');

module.exports = function(app) {
    app.get('device/api/ping', function(req, res) {
        res.json({info:'pong'})
    });
    //Create
     app.post('/device/api/create', function(req, res) {
        var deviceModel = new Devices(req.body);
        deviceModel.save(function(err) {
            if(err) {
                res.json({info:"error during create", error:err});
            }
            res.json({info:"client created successfully"});
        });
    });

    app.get('/device/api/retrieve', function(req, res) {
        Devices.find(function(err, deviceData) {
            if(err) {
                res.json({info:"error during retrieving clients", error:err});
            }
            res.json({info:"clients found", data:deviceData});
        });
    });

    app.get('/device/api/retrieve/:id', function(req, res) {
        Devices.findById(req.params.id, function(err, deviceData) {
            if(err) {
                res.json({info:"error during find", error:err});
            }
            if(deviceData) {
                res.json({info:"client found", data:deviceData});
            } else {
                res.json({info:"client not found"});
            }

        });
    });

    app.put('/device/api/update/:id', function(req, res) {
        Devices.findById(req.params.id, function(err, deviceData) {
            if(err) {
                res.json({info:"error during find", error:err});
            }
            if(deviceData) {
                _.merge(deviceData, req.body);
                deviceData.save(function(err) {
                    if(err) {
                        res.json({info:"error during update", error:err});
                    }
                    res.json({info:"client updated successfully", data:deviceData});
                });
            } else {
                res.json({info:"client not found"});
            }
        });
    });

    app.delete('/device/api/delete/:id', function(req, res) {
        Devices.findByIdAndRemove(req.params.id, function(err) {
            if(err) {
                res.json({info:"error during remove", error:err});
            }
            res.json({info:"client removed successfully"});
        });
    });

}