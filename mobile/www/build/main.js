webpackJsonp([0],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceModel; });
var DeviceModel = (function () {
    function DeviceModel() {
    }
    return DeviceModel;
}());

//# sourceMappingURL=app.model.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api_Url; });
var Api_Url = "http://127.0.0.1:3310";
//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_page_edit_page__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_location_service__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_model__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_location_model__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_product_page__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__operating_system_operating_system_page__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DetailPage = (function () {
    function DetailPage(nav, navParams, loadingController, deviceService, locationService, alertCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.deviceService = deviceService;
        this.locationService = locationService;
        this.alertCtrl = alertCtrl;
        this.locations = [];
        this.device = this.navParams.data;
        this.deviceModel = new __WEBPACK_IMPORTED_MODULE_5__app_app_model__["a" /* DeviceModel */]();
        this.locationModel = new __WEBPACK_IMPORTED_MODULE_6__app_location_model__["a" /* LocationModel */]();
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting Devices'
        });
        loader.present().then(function () {
            _this.locationService.GetDeviceLocation(_this.device._id).subscribe(function (responce) { return _this.locations = responce.data; });
            loader.dismiss();
        });
    };
    DetailPage.prototype.onEditButtonClick = function ($event, device) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__edit_page_edit_page__["a" /* EditPage */], this.device);
    };
    DetailPage.prototype.onDeleteButtonClick = function (id) {
        this.deviceService.DeleteDevice(id).subscribe(function (response) { console.log(response.info); });
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    DetailPage.prototype.onAddLocationButtonClick = function ($event, device) {
        alert("Add location for " + device.name);
    };
    DetailPage.prototype.addLocation = function ($event, device) {
        // alert("Location "+device._id);
        // this.nav.push(LocationPage, device);
        this.showPrompt(device);
    };
    DetailPage.prototype.addOperatingSystem = function ($event, device) {
        alert("OS " + device._id);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__operating_system_operating_system_page__["a" /* OperatingSystemPage */], device);
    };
    DetailPage.prototype.addProduct = function ($event, device) {
        alert("Product " + device._id);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__product_product_page__["a" /* ProductPage */], device);
    };
    DetailPage.prototype.showPrompt = function (device) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Add Location',
            //message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'location name'
                },
                {
                    name: 'quantity',
                    placeholder: 'device quantity'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log(data.quantity + ' ' + device.brand + ' ' + device.name + ' located at ' + data.name);
                        _this.locationModel.name = data.name;
                        _this.locationModel.quantity = data.quantity;
                        _this.locationModel.deviceId = device._id;
                        _this.locationService.SaveLocation(_this.locationModel).subscribe(function (response) { console.log(response.info); });
                        _this.nav.popToRoot();
                    }
                }
            ]
        });
        prompt.present();
    };
    DetailPage.prototype.showDetails = function (location) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Location Details',
            //message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'location name',
                    value: location.name
                },
                {
                    name: 'quantity',
                    placeholder: 'device quantity',
                    value: location.quantity
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function (data) {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Update',
                    handler: function (data) {
                        // console.log(data.quantity+' '+device.brand+' '+device.name+' located at '+data.name);
                        _this.locationModel.name = data.name;
                        _this.locationModel.quantity = data.quantity;
                        _this.locationModel._id = location._id;
                        _this.locationModel.deviceId = location.deviceId;
                        _this.locationService.UpdateLocation(_this.locationModel).subscribe(function (response) { console.log(response.info); });
                        _this.nav.popToRoot();
                    }
                }
            ]
        });
        prompt.present();
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Development\Local\Device Tracker\mobile\src\pages\detail-page\detail-page.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <!--<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>-->\n    <ion-title>Device Tracker</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="primary">\n    <ion-title>Device Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n      <ion-list>\n        <ion-item><b>Brand:</b> <span item end>{{device.brand}}</span></ion-item>\n        <ion-item><b>Name:</b> {{device.name}}</ion-item>\n        <ion-item><b>Type:</b> {{device.type}}</ion-item>\n        <ion-item><b>Quantity:</b> {{device.quantity}}</ion-item>\n        <ion-item><b>Date Created:</b> {{device.dateCreated | date:\'d/M/yy\'}}</ion-item>\n        <ion-item><b>Last Updated:</b> {{device.lastUpdated | date:\'d/M/yy\'}}</ion-item>\n        <ion-item-divider color="light"><b>Location:</b>\n          <ion-fab middle right edge>\n            <button ion-fab mini (click)="addLocation($event, device)"> <ion-icon name="add"></ion-icon></button>\n          </ion-fab>\n        </ion-item-divider>\n        <ion-item *ngFor="let location of locations" (click)="showDetails(location)">\n          {{location.name}} <ion-badge color="secondary" item-end>{{location.quantity}}</ion-badge>\n        </ion-item>\n        <ion-item><b>Operating System:</b>\n          <ion-fab middle right edge>\n            <button ion-fab mini (click)="addOperatingSystem($event, device)"> <ion-icon ios="ios-clipboard" md="md-clipboard"></ion-icon></button>\n          </ion-fab>\n        </ion-item>\n        <ion-item><b>Product:</b>\n          <ion-fab middle right edge>\n            <button ion-fab mini (click)="addProduct($event, device)"> <ion-icon ios="ios-clipboard" md="md-clipboard"></ion-icon></button>\n          </ion-fab>\n        </ion-item>\n      </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-navbar padding>\n    <button ion-button outline outline (click)="onEditButtonClick($event, device)">\n      EDIT\n    </button>\n\n    <!-- Only icon (no text) -->\n    <button ion-button outline  (click)="onAddLocationButtonClick($event, device)">\n      Add Location\n    </button>\n\n    <!-- Float the icon right -->\n    <button ion-button outline (click)="onDeleteButtonClick(device._id)">\n      DELETE\n    </button>\n  </ion-navbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Development\Local\Device Tracker\mobile\src\pages\detail-page\detail-page.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__app_location_service__["a" /* LocationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* DeviceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__app_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_location_service__["a" /* LocationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
], DetailPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=detail-page.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_model__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditPage = (function () {
    function EditPage(nav, navParams, deviceService) {
        this.nav = nav;
        this.navParams = navParams;
        this.deviceService = deviceService;
        this.device = this.navParams.data;
        this.deviceModel = new __WEBPACK_IMPORTED_MODULE_3__app_app_model__["a" /* DeviceModel */]();
    }
    EditPage.prototype.onUpdateButtonClick = function () {
        this.deviceService.UpdateDevice(this.deviceModel).subscribe(function (response) { console.log(response.info); });
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    return EditPage;
}());
EditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Development\Local\Device Tracker\mobile\src\pages\edit-page\edit-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Edit Device\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n  <ion-item>\n    <ion-label floating>Brand</ion-label>\n    <ion-input type="text" value={{device.brand}}></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Name</ion-label>\n    <ion-input type="text" value={{device.name}}></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Type</ion-label>\n    <ion-input type="text" value={{device.type}}></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Quantity</ion-label>\n    <ion-input type="text" value={{device.quantity}}></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Location</ion-label>\n    <ion-input type="text" value={{device.location}}></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Operating System</ion-label>\n    <ion-input type="text" value={{device.operatingSystem}}></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Product</ion-label>\n    <ion-input type="text" value={{device.product}}></ion-input>\n  </ion-item>\n\n</ion-list>\n</ion-content>\n<ion-footer>\n  <ion-navbar>\n    <button ion-button (click)="onUpdateButtonClick(device)">Update</button>\n  </ion-navbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Development\Local\Device Tracker\mobile\src\pages\edit-page\edit-page.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* DeviceService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* DeviceService */]])
], EditPage);

//# sourceMappingURL=edit-page.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
    }
    LocationService.prototype.GetAdminHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    LocationService.prototype.GetDeviceLocation = function (id) {
        console.log(id);
        var result = this.http.get(__WEBPACK_IMPORTED_MODULE_2__configuration__["a" /* Api_Url */] + "/location/api/retrieve/" + id, { headers: this.GetAdminHeaders() }).map(function (res) { return res.json(); });
        return result;
    };
    LocationService.prototype.SaveLocation = function (model) {
        var result = this.http.post(__WEBPACK_IMPORTED_MODULE_2__configuration__["a" /* Api_Url */] + "/location/api/create", model, { headers: this.GetAdminHeaders() }).map(function (res) { return res.json(); });
        return result;
    };
    // DeleteDevice(id: String): any {
    //     var result = this.http.delete("http://127.0.0.1:3310/device/api/delete/"+id, { headers: this.GetAdminHeaders() }).map(res => res.json());
    //     return result;
    // }
    LocationService.prototype.UpdateLocation = function (model) {
        var result = this.http.put(__WEBPACK_IMPORTED_MODULE_2__configuration__["a" /* Api_Url */] + "/location/api/update/" + model._id, model, { headers: this.GetAdminHeaders() }).map(function (res) { return res.json(); });
        alert(model._id);
        return result;
    };
    return LocationService;
}());
LocationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LocationService);

var _a;
//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { DeviceService } from '../../app/app.service';
// import { OperatingSystemModel } from '../../app/operating-system.model';
var ProductPage = (function () {
    function ProductPage(navParams) {
        this.navParams = navParams;
        this.device = this.navParams.data;
    }
    return ProductPage;
}());
ProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Development\Local\Device Tracker\mobile\src\pages\product\product-page.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <!--<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>-->\n    <ion-title>Device Tracker</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="primary">\n    <ion-title>{{device.brand + " " + device.name + " Product"}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n'/*ion-inline-end:"C:\Development\Local\Device Tracker\mobile\src\pages\product\product-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ProductPage);

//# sourceMappingURL=product-page.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatingSystemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { DeviceService } from '../../app/app.service';
// import { OperatingSystemModel } from '../../app/operating-system.model';
var OperatingSystemPage = (function () {
    function OperatingSystemPage(navParams) {
        this.navParams = navParams;
        this.device = this.navParams.data;
    }
    return OperatingSystemPage;
}());
OperatingSystemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Development\Local\Device Tracker\mobile\src\pages\operating-system\operating-system-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{device.brand+" "+device.name+" OS"}}</ion-title>\n  </ion-navbar>\n</ion-header>\n'/*ion-inline-end:"C:\Development\Local\Device Tracker\mobile\src\pages\operating-system\operating-system-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], OperatingSystemPage);

//# sourceMappingURL=operating-system-page.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_model__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPage = (function () {
    function AddPage(deviceService, nav) {
        this.deviceService = deviceService;
        this.nav = nav;
        this.deviceModel = new __WEBPACK_IMPORTED_MODULE_2__app_app_model__["a" /* DeviceModel */]();
    }
    AddPage.prototype.onSaveButtonClick = function () {
        this.deviceService.SaveDevice(this.deviceModel).subscribe(function (response) { console.log(response.info); });
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    return AddPage;
}());
AddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Development\Local\Device Tracker\mobile\src\pages\add-page\add-page.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <!--<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>-->\n    <ion-title>Device Tracker</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="primary">\n    <ion-title>Add Device</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-list>\n\n  <ion-item>\n    <ion-label floating>Brand</ion-label>\n    <ion-input type="text" name="brand" id="brand" [(ngModel)]="deviceModel.brand"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Name</ion-label>\n    <ion-input type="text" name="name" id="name" [(ngModel)]="deviceModel.name"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Type</ion-label>\n    <ion-input type="text" name="type" id="type" [(ngModel)]="deviceModel.type"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Quantity</ion-label>\n    <ion-input type="number" name="quantity" id="quantity" [(ngModel)]="deviceModel.quantity"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Operating System</ion-label>\n    <ion-input type="text" name="operatingSystem" id="operatingSystem" [(ngModel)]="deviceModel.operatingSystem"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Location</ion-label>\n    <ion-input type="text" name="location" id="location" [(ngModel)]="deviceModel.location"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Product</ion-label>\n    <ion-input type="text" name="product" id="product" [(ngModel)]="deviceModel.product"></ion-input>\n  </ion-item>\n\n</ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-navbar>\n    <button ion-button (click)="onSaveButtonClick()">Save</button>\n  </ion-navbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Development\Local\Device Tracker\mobile\src\pages\add-page\add-page.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_app_service__["a" /* DeviceService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]])
], AddPage);

//# sourceMappingURL=add-page.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Development\Local\Device Tracker\mobile\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Development\Local\Device Tracker\mobile\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(266);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_detail_page_detail_page__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_edit_page_edit_page__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_page_add_page__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_location_location_page__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_operating_system_operating_system_page__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_product_product_page__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__location_service__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_detail_page_detail_page__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_edit_page_edit_page__["a" /* EditPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_page_add_page__["a" /* AddPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_location_location_page__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_operating_system_operating_system_page__["a" /* OperatingSystemPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_product_product_page__["a" /* ProductPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_detail_page_detail_page__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_edit_page_edit_page__["a" /* EditPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_page_add_page__["a" /* AddPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_location_location_page__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_operating_system_operating_system_page__["a" /* OperatingSystemPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_product_product_page__["a" /* ProductPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__app_service__["a" /* DeviceService */],
            __WEBPACK_IMPORTED_MODULE_16__location_service__["a" /* LocationService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Development\Local\Device Tracker\mobile\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Development\Local\Device Tracker\mobile\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_page_detail_page__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_page_add_page__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, deviceService, loadingController) {
        this.navCtrl = navCtrl;
        this.deviceService = deviceService;
        this.loadingController = loadingController;
        this.devices = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting Devices'
        });
        loader.present().then(function () {
            _this.deviceService.GetList().subscribe(function (responce) { return _this.devices = responce.data; });
            loader.dismiss();
        });
    };
    HomePage.prototype.onItemTap = function ($event, devices) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_page_detail_page__["a" /* DetailPage */], devices);
    };
    HomePage.prototype.onAddButtonClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_page_add_page__["a" /* AddPage */]);
    };
    HomePage.prototype.onDeleteButtonClick = function ($event, device) {
        var _this = this;
        alert("Device name " + device.name + " deleted.");
        this.deviceService.DeleteDevice(device).subscribe(function (responce) { return _this.devices = responce.data; });
    };
    HomePage.prototype.searchDevice = function (searchWord) {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting Devices'
        });
        loader.present(this.deviceService.GetList().subscribe(function (responce) { return _this.devices = responce.data; })).then(function () {
            var val = searchWord.srcElement.value;
            if (val && val.trim() != '') {
                _this.devices = _this.devices.filter(function (item) {
                    return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
            loader.dismiss();
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Development\Local\Device Tracker\mobile\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <!--<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>-->\n    <ion-title>Device Tracker</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="primary">\n    <ion-title>Device List\n      <ion-fab middle right edge>\n        <button color="secondary" ion-fab mini (click)="onAddButtonClick()"><ion-icon name="add"></ion-icon></button>\n      </ion-fab>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="searchDevice($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of devices" (click)="onItemTap($event, item)">\n        <b>{{item.brand}}</b> {{item.name}}\n      <ion-badge item-end>{{item.quantity}}</ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Development\Local\Device Tracker\mobile\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* DeviceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* DeviceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object])
], HomePage);

var _a, _b, _c;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeviceService = (function () {
    function DeviceService(http) {
        this.http = http;
    }
    DeviceService.prototype.GetAdminHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    DeviceService.prototype.GetList = function () {
        var result = this.http.get(__WEBPACK_IMPORTED_MODULE_2__configuration__["a" /* Api_Url */] + "/device/api/retrieve", { headers: this.GetAdminHeaders() }).map(function (res) { return res.json(); });
        return result;
    };
    DeviceService.prototype.SaveDevice = function (model) {
        var result = this.http.post(__WEBPACK_IMPORTED_MODULE_2__configuration__["a" /* Api_Url */] + "/device/api/create", model, { headers: this.GetAdminHeaders() }).map(function (res) { return res.json(); });
        return result;
    };
    DeviceService.prototype.DeleteDevice = function (id) {
        var result = this.http.delete("http://127.0.0.1:3310/device/api/delete/" + id, { headers: this.GetAdminHeaders() }).map(function (res) { return res.json(); });
        return result;
    };
    DeviceService.prototype.UpdateDevice = function (model) {
        var result = this.http.put(__WEBPACK_IMPORTED_MODULE_2__configuration__["a" /* Api_Url */] + "/device/api/update/" + model._id, model, { headers: this.GetAdminHeaders() }).map(function (res) { return res.json(); });
        alert(model._id);
        return result;
    };
    return DeviceService;
}());
DeviceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], DeviceService);

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModel; });
var LocationModel = (function () {
    function LocationModel() {
    }
    return LocationModel;
}());

//# sourceMappingURL=location.model.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { DeviceService } from '../../app/app.service';
// import { OperatingSystemModel } from '../../app/operating-system.model';
var LocationPage = (function () {
    function LocationPage(navParams) {
        this.navParams = navParams;
        this.device = this.navParams.data;
    }
    LocationPage.prototype.onLocationAddClick = function () {
        alert("Location added.");
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Development\Local\Device Tracker\mobile\src\pages\location\location-page.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <!--<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>-->\n    <ion-title>Device Tracker</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="primary">\n    <ion-title>{{device.brand + " " + device.name + " Location"}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-fab middle right edge>\n        <button ion-fab mini><ion-icon name="add" (click)="onLocationAddClick()"></ion-icon></button>\n      </ion-fab>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Development\Local\Device Tracker\mobile\src\pages\location\location-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], LocationPage);

//# sourceMappingURL=location-page.js.map

/***/ })

},[261]);
//# sourceMappingURL=main.js.map