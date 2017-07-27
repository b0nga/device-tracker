import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { DeviceService } from '../../app/app.service';
import { DeviceModel } from '../../app/app.model';
import { DetailPage } from "../detail-page/detail-page";
import { AddPage } from "../add-page/add-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DeviceService]
})
export class HomePage {
  devices: DeviceModel[]=[];
  constructor(private navCtrl: NavController, private deviceService: DeviceService, private loadingController: LoadingController) {

  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting Devices'
    });

    loader.present().then(() => {
      this.deviceService.GetList().subscribe(responce => this.devices = responce.data);
      loader.dismiss();
    });
  }

  onItemTap($event, devices) {
    this.navCtrl.push(DetailPage, devices);
  }

  onAddButtonClick() {
    this.navCtrl.push(AddPage);
  }

  onDeleteButtonClick($event, device) {
    alert("Device name "+device.name+" deleted.");
    this.deviceService.DeleteDevice(device).subscribe(responce => this.devices = responce.data);
  }

  searchDevice(searchWord: any) {
    let loader = this.loadingController.create({
      content: 'Getting Devices'
    });

    loader.present(
      this.deviceService.GetList().subscribe(responce => this.devices = responce.data)
    ).then(() => {

      let val = searchWord.srcElement.value;

      if (val && val.trim() != '') {
        this.devices = this.devices.filter((item) => {
          return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }

      loader.dismiss();
    });
  }

}
