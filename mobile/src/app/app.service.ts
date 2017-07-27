import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Api_Url } from './configuration';
import 'rxjs/Rx';
import { DeviceModel } from './app.model';

@Injectable()

export class DeviceService {

  constructor(private http: Http) {

  }

  GetAdminHeaders(): Headers {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    GetList(): any {
        var result = this.http.get(Api_Url + "/device/api/retrieve", { headers: this.GetAdminHeaders() }).map(res => res.json());
        return result;
    }

    SaveDevice(model: DeviceModel): any {
        var result = this.http.post(Api_Url + "/device/api/create", model, { headers: this.GetAdminHeaders() }).map(res => res.json());
        return result;
    }

    DeleteDevice(id: String): any {
        var result = this.http.delete("http://127.0.0.1:3310/device/api/delete/"+id, { headers: this.GetAdminHeaders() }).map(res => res.json());
        return result;
    }

    UpdateDevice(model: DeviceModel) {
      var result = this.http.put(Api_Url+"/device/api/update/"+model._id, model, { headers: this.GetAdminHeaders() }).map(res => res.json());
      alert(model._id);
      return result;
    }
}
