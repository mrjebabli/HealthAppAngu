import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/Doctor';
import { DoctorsService } from '../shared/doctors.service';


@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {
  doctorList: Doctor[];
  doctor: Doctor;
 
  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.doctorsService.getAllDoctors().subscribe(
      (data: Doctor[]) => this.doctorList = data);
  }

  incrementRecommendation(d: Doctor){
    let i=this.doctorList.indexOf(d);
    this.doctorList[i].recommendation++;
  }
  


}
