import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { EditPage } from '../edit-page/edit-page';
import { DeviceService } from '../../app/app.service';
import { DeviceModel } from '../../app/app.model';
import { HomePage } from '../home/home';
import { LocationPage } from "../location/location-page";
import { ProductPage } from "../product/product-page";
import { OperatingSystemPage } from "../operating-system/operating-system-page";

@Component({
  templateUrl: './detail-page.html'
})

export class DetailPage {
  device: any;
  deviceModel: DeviceModel;
  constructor(private nav:NavController, private navParams: NavParams, private deviceService: DeviceService) {
    this.device = this.navParams.data;
    this.deviceModel = new DeviceModel();
  }

  onEditButtonClick($event, device) {
    this.nav.push(EditPage, this.device);
  }

  onDeleteButtonClick(id: String) {
    this.deviceService.DeleteDevice(id).subscribe(response => {console.log(response.info);});
    this.nav.push(HomePage);
  }

  onAddLocationButtonClick($event, device) {
    alert("Add location for "+device.name);
  }

  addLocation($event, device) {
    alert("Location "+device._id);
    this.nav.push(LocationPage, device);
  }

  addOperatingSystem($event, device) {
    alert("OS "+device._id);
    this.nav.push(OperatingSystemPage, device);
  }

  addProduct($event, device) {
    alert("Product "+device._id);
    this.nav.push(ProductPage, device);
  }
}
