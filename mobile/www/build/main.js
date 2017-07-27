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

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_page_edit_page__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_model__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__location_location_page__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product_page__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__operating_system_operating_system_page__ = __webpack_require__(574);
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
    function DetailPage(nav, navParams, deviceService) {
        this.nav = nav;
        this.navParams = navParams;
        this.deviceService = deviceService;
        this.device = this.navParams.data;
        this.deviceModel = new __WEBPACK_IMPORTED_MODULE_4__app_app_model__["a" /* DeviceModel */]();
    }
    DetailPage.prototype.onEditButtonClick = function ($event, device) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__edit_page_edit_page__["a" /* EditPage */], this.device);
    };
    DetailPage.prototype.onDeleteButtonClick = function (id) {
        this.deviceService.DeleteDevice(id).subscribe(function (response) { console.log(response.info); });
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    DetailPage.prototype.onAddLocationButtonClick = function ($event, device) {
        alert("Add location for " + device.name);
    };
    DetailPage.prototype.addLocation = function ($event, device) {
        alert("Location " + device._id);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__location_location_page__["a" /* LocationPage */], device);
    };
    DetailPage.prototype.addOperatingSystem = function ($event, device) {
        alert("OS " + device._id);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__operating_system_operating_system_page__["a" /* OperatingSystemPage */], device);
    };
    DetailPage.prototype.addProduct = function ($event, device) {
        alert("Product " + device._id);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product_page__["a" /* ProductPage */], device);
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Development\Local\Device Tracker\mobile\src\pages\detail-page\detail-page.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <!--<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>-->\n    <ion-title>Device Tracker</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="primary">\n    <ion-title>Device Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n      <ion-list>\n        <ion-item><b>Brand:</b> {{device.brand}}</ion-item>\n        <ion-item><b>Name:</b> {{device.name}}</ion-item>\n        <ion-item><b>Type:</b> {{device.type}}</ion-item>\n        <ion-item><b>Quantity:</b> {{device.quantity}}</ion-item>\n        <ion-item><b>Date Created:</b> {{device.dateCreated | date:\'d/M/yy\'}}</ion-item>\n        <ion-item><b>Last Updated:</b> {{device.lastUpdated | date:\'d/M/yy\'}}</ion-item>\n        <ion-item><b>Location:</b>\n          <ion-fab middle right edge>\n            <button ion-fab mini (click)="addLocation($event, device)"><ion-icon md="md-clipboard"></ion-icon></button>\n          </ion-fab>\n        </ion-item>\n        <ion-item><b>Operating System:</b>\n          <ion-fab middle right edge>\n            <button ion-fab mini (click)="addOperatingSystem($event, device)"><ion-icon md="md-clipboard"></ion-icon></button>\n          </ion-fab>\n        </ion-item>\n        <ion-item><b>Product:</b>\n          <ion-fab middle right edge>\n            <button ion-fab mini (click)="addProduct($event, device)"><ion-icon md="md-clipboard"></ion-icon></button>\n          </ion-fab>\n        </ion-item>\n      </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-navbar padding>\n    <button ion-button outline outline (click)="onEditButtonClick($event, device)">\n      EDIT\n    </button>\n\n    <!-- Only icon (no text) -->\n    <button ion-button outline  (click)="onAddLocationButtonClick($event, device)">\n      Add Location\n    </button>\n\n    <!-- Float the icon right -->\n    <button ion-button outline (click)="onDeleteButtonClick(device._id)">\n      DELETE\n    </button>\n  </ion-navbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Development\Local\Device Tracker\mobile\src\pages\detail-page\detail-page.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* DeviceService */]) === "function" && _c || Object])
], DetailPage);

var _a, _b, _c;
//# sourceMappingURL=detail-page.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_model__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(50);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* DeviceService */]])
], EditPage);

//# sourceMappingURL=edit-page.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_model__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(50);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */]])
], AddPage);

//# sourceMappingURL=add-page.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(261);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_detail_page_detail_page__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_edit_page_edit_page__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_page_add_page__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_location_location_page__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_operating_system_operating_system_page__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_product_product_page__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_service__ = __webpack_require__(51);
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
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
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(255);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Development\Local\Device Tracker\mobile\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Development\Local\Device Tracker\mobile\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api_Url; });
var Api_Url = "http://127.0.0.1:3310";
//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_page_detail_page__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_page_add_page__ = __webpack_require__(254);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(306);
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

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Development\Local\Device Tracker\mobile\src\pages\location\location-page.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <!--<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>-->\n    <ion-title>Device Tracker</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="primary">\n    <ion-title>{{device.brand + " " + device.name + " Location"}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-fab middle right edge>\n        <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n      </ion-fab>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Development\Local\Device Tracker\mobile\src\pages\location\location-page.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _a || Object])
], LocationPage);

var _a;
//# sourceMappingURL=location-page.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _a || Object])
], ProductPage);

var _a;
//# sourceMappingURL=product-page.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatingSystemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _a || Object])
], OperatingSystemPage);

var _a;
//# sourceMappingURL=operating-system-page.js.map

/***/ })

},[256]);
//# sourceMappingURL=main.js.map