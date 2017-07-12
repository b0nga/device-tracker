import { Component, OnInit } from '@angular/core';
import { CaptureModel } from './capture.model';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent implements OnInit {
  CaptureModel: CaptureModel;
  constructor() { }

  ngOnInit() {
  }

}
