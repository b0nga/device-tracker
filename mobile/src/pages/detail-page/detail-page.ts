import { Component } from '@angular/core';
import { NavParams, NavController, AlertController, LoadingController } from 'ionic-angular';
import { EditPage } from '../edit-page/edit-page';
import { DeviceService } from '../../app/app.service';
import { LocationService } from '../../app/location.service';
import { DeviceModel } from '../../app/app.model';
import { LocationModel } from '../../app/location.model';
import { HomePage } from '../home/home';
import { LocationPage } from "../location/location-page";
import { ProductPage } from "../product/product-page";
import { OperatingSystemPage } from "../operating-system/operating-system-page";

@Component({
  templateUrl: './detail-page.html',
  providers: [LocationService]
})

export class DetailPage {
  device: any;
  deviceModel: DeviceModel;
  locationModel: LocationModel;
  locations: LocationModel[]=[];
  constructor(private nav:NavController, private navParams: NavParams, private loadingController: LoadingController, private deviceService: DeviceService, private locationService: LocationService, private alertCtrl: AlertController) {
    this.device = this.navParams.data;
    this.deviceModel = new DeviceModel();
    this.locationModel = new LocationModel();
  }



  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting Devices'
    });

    loader.present().then(() => {
      this.locationService.GetDeviceLocation(this.device._id).subscribe(responce => this.locations = responce.data);
      loader.dismiss();
    });
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
    // alert("Location "+device._id);
    // this.nav.push(LocationPage, device);
    this.showPrompt(device);
  }

  addOperatingSystem($event, device) {
    alert("OS "+device._id);
    this.nav.push(OperatingSystemPage, device);
  }

  addProduct($event, device) {
    alert("Product "+device._id);
    this.nav.push(ProductPage, device);
  }

  showPrompt(device) {
    let prompt = this.alertCtrl.create({
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
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data.quantity+' '+device.brand+' '+device.name+' located at '+data.name);
            this.locationModel.name = data.name;
            this.locationModel.quantity = data.quantity;
            this.locationModel.deviceId = device._id;

            this.locationService.SaveLocation(this.locationModel).subscribe(response => {console.log(response.info);});
            this.nav.popToRoot();
          }
        }
      ]
    });
    prompt.present();
  }

  showDetails(location) {
    let prompt = this.alertCtrl.create({
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
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: data => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
           // console.log(data.quantity+' '+device.brand+' '+device.name+' located at '+data.name);
            this.locationModel.name = data.name;
            this.locationModel.quantity = data.quantity;
            this.locationModel._id = location._id;
            this.locationModel.deviceId = location.deviceId;

            this.locationService.UpdateLocation(this.locationModel).subscribe(response => {console.log(response.info);});
            this.nav.popToRoot();
          }
        }
      ]
    });
    prompt.present();
  }

}
