import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Doctor } from '../model/Doctor';
import { DoctorsService } from '../shared/doctors.service';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  dr:Doctor;
  list:Doctor[];

  @Input() doctor: Doctor;
  @Output() incrementEvent = new EventEmitter<Doctor>();
 

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    
  }
  sendNotif(){
    this.incrementEvent.emit(this.doctor);
    this.doctorsService.addRecommendation(this.doctor).subscribe(
      ()=>this.list  = [this.doctor,...this.list]
    );
  }
  

}
