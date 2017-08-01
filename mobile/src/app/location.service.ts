import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Api_Url } from './configuration';
import 'rxjs/Rx';
import { LocationModel } from './location.model';

@Injectable()

export class LocationService {

  constructor(private http: Http) {

  }

  GetAdminHeaders(): Headers {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    GetDeviceLocation(id: String): any {
        console.log(id);
        var result = this.http.get(Api_Url + "/location/api/retrieve/"+id, { headers: this.GetAdminHeaders() }).map(res => res.json());
        return result;
    }

    SaveLocation(model: LocationModel): any {
        var result = this.http.post(Api_Url + "/location/api/create", model, { headers: this.GetAdminHeaders() }).map(res => res.json());
        return result;
     }

    // DeleteDevice(id: String): any {
    //     var result = this.http.delete("http://127.0.0.1:3310/device/api/delete/"+id, { headers: this.GetAdminHeaders() }).map(res => res.json());
    //     return result;
    // }

    UpdateLocation(model: LocationModel) {
      var result = this.http.put(Api_Url+"/location/api/update/"+model._id, model, { headers: this.GetAdminHeaders() }).map(res => res.json());
      alert(model._id);
      return result;
    }
}
