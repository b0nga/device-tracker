import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { DeviceService } from '../../app/app.service';
import { DeviceModel } from '../../app/app.model';
import { HomePage } from '../home/home';

@Component ({
  templateUrl: './edit-page.html',
  providers: [DeviceService]
})

export class EditPage {
  device: any;
  deviceModel: DeviceModel;
  constructor(private nav: NavController, private navParams: NavParams, private deviceService: DeviceService) {
    this.device = this.navParams.data;
    this.deviceModel = new DeviceModel();
  }

  onUpdateButtonClick() {
    this.deviceService.UpdateDevice(this.deviceModel).subscribe(response => {console.log(response.info);});
    this.nav.push(HomePage);
  }

}
