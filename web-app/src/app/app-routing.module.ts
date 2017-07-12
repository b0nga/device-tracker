import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { CaptureComponent } from 'app/capture/capture.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'devices'
  },
  {
    path: 'devices',
    component: DevicesComponent
  },
  {
    path: 'add',
    component: CaptureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
