import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  devices = [
    {"name":"nuk","brand":"intel","type":"microcomputer","quantity":"1"},
    {"name":"pi zero","brand":"raspberry","type":"microcomputer","quantity":"3"},
    {"name":"xu4","brand":"odroid","type":"microcomputer","quantity":"5"}
  ];
  constructor() { }

  ngOnInit() {
  }

  onDeleteButtonClick(data: any) {
    alert('Deleting: ' + data.name);
  }

  onEditButtonClick(data: any) {
    alert('Editting: ' + data.name);
  }

}
