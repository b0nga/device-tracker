import {Component} from '@angular/core';
import { NavParams } from 'ionic-angular';
// import { DeviceService } from '../../app/app.service';
// import { OperatingSystemModel } from '../../app/operating-system.model';

@Component({
  templateUrl: "./product-page.html",
  // providers: [DeviceService]
})

export class ProductPage {
  device: any;
  constructor(private navParams:NavParams) {
    this.device = this.navParams.data;
  }
}
