import {Component} from '@angular/core';
import { NavParams } from 'ionic-angular';
// import { DeviceService } from '../../app/app.service';
// import { OperatingSystemModel } from '../../app/operating-system.model';

@Component({
  templateUrl: "./location-page.html",
  // providers: [DeviceService]
})

export class LocationPage {
  device: any;
  constructor(private navParams:NavParams) {
    this.device = this.navParams.data;
  }

  onLocationAddClick() {
    alert("Location added.");
  }
}
