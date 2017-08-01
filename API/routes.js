var _ = require('lodash');
var Devices = require('./models/deviceModel.js');
var Locations = require('./models/locationModel.js');

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
     app.post('/location/api/create', function(req, res) {
        var locationModel = new Locations(req.body);
        locationModel.save(function(err) {
            if(err) {
                res.json({info:"error during create", error:err});
            }
            res.json({info:"location saved successfully"});
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

    app.get('/location/api/retrieve', function(req, res) {
        Locations.find(function(err, locations) {
            if(err) {
                res.json({info:"error during retrieving locations", error:err});
            }
            res.json({info:"location found", data:locations});
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


    app.get('/location/api/retrieve/:id', function(req, res) {
        var query  = Locations.where({ deviceId: req.params.id });
        query.find(function(err, locations) {
            if(err) {
                res.json({info:"error during find", error:err});
            }
            if(locations) {
                res.json({info:"location found", data:locations});
            } else {
                res.json({info:"location not found "+req.params.id});
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

    app.put('/location/api/update/:id', function(req, res) {
        var updateDevice = req.params.id;
        Locations.findById(updateDevice, function(err, location) {
            console.log(updateDevice);
            if(err) {
                res.json({info:"error during find", error:err});
            }
            if(location) {
                _.merge(location, req.body);
                location.save(function(err) {
                    if(err) {
                        res.json({info:"error during update", error:err});
                    }
                    res.json({info:"location updated successfully", data:location});
                });
            } else {
                res.json({info:"location not found"});
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