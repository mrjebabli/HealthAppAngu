import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Doctor } from '../model/Doctor';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  @Input() doctor: Doctor;
  @Output() incrementEvent = new EventEmitter<Doctor>()
  constructor() { }

  ngOnInit(): void {
    
  }
  sendNotif(){
    this.incrementEvent.emit(this.doctor);


  }

}
