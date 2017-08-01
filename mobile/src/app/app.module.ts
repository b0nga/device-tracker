import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail-page/detail-page';
import { EditPage } from '../pages/edit-page/edit-page';
import { AddPage } from '../pages/add-page/add-page';
import { LocationPage } from '../pages/location/location-page';
import { OperatingSystemPage } from '../pages/operating-system/operating-system-page';
import { ProductPage } from '../pages/product/product-page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DeviceService } from './app.service';
import { LocationService } from './location.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    EditPage,
    AddPage,
    LocationPage,
    OperatingSystemPage,
    ProductPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    EditPage,
    AddPage,
    LocationPage,
    OperatingSystemPage,
    ProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceService,
    LocationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
