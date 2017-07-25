var _ = require('lodash');
var Devices = require('./models/deviceModel.js');

module.exports = function(app) {
    app.get('/device/api/ping', function(req, res) {
        res.json({info:'pong'})
    });
    //Create
     app.post('/device/api/create', function(req, res) {
        var deviceModel = new Devices(req.body);
        deviceModel.save(function(err) {
            if(err) {
                res.json({info:"error during create", error:err});
            }
            res.json({info:"device saved successfully"});
        });
    });

    app.get('/device/api/retrieve', function(req, res) {
        Devices.find(function(err, deviceData) {
            if(err) {
                res.json({info:"error during retrieving clients", error:err});
            }
            res.json({info:"devices found", data:deviceData});
        });
    });

    app.get('/device/api/retrieve/:name', function(req, res) {
        Devices.findById(req.params.name, function(err, deviceData) {
            if(err) {
                res.json({info:"error during find", error:err});
            }
            if(deviceData) {
                res.json({info:"device found", data:deviceData});
            } else {
                res.json({info:"device not found"});
            }

        });
    });

    app.put('/device/api/update/:id', function(req, res) {
        var updateDevice = req.params.id;
        Devices.findById(updateDevice, function(err, deviceData) {
            console.log(updateDevice);
            if(err) {
                res.json({info:"error during find", error:err});
            }
            if(deviceData) {
                _.merge(deviceData, req.body);
                deviceData.save(function(err) {
                    if(err) {
                        res.json({info:"error during update", error:err});
                    }
                    res.json({info:"device updated successfully", data:deviceData});
                });
            } else {
                res.json({info:"device not found"});
            }
        });
    });

    app.delete("/device/api/delete/:id", function (req, res) {
        var deleteDevice = req.params.id;
        Devices.remove({ _id: deleteDevice }, function (err) {
            if (err) {
                res.json({info:"error during remove "+deleteDevice, error:err});
            }
            res.json({info:"Device removed successfully"});
        })
    })

}