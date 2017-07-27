import { Component } from '@angular/core';
import { DeviceService } from '../../app/app.service';
import { DeviceModel } from '../../app/app.model';
import {NavController} from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  templateUrl: './add-page.html',
  providers: [DeviceService]
})

export class AddPage {
  deviceModel: DeviceModel;
  constructor(private deviceService: DeviceService, private nav: NavController) {
    this.deviceModel = new DeviceModel();
  }

  onSaveButtonClick() {
    this.deviceService.SaveDevice(this.deviceModel).subscribe(response => {console.log(response.info);});
    this.nav.push(HomePage);
  }
}
