import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/Doctor';


@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {
  doctorList: Doctor[];
  constructor() { }

  ngOnInit(): void {
    this.doctorList=[
      
    
    ];
  }

  incrementRecommendation(d: Doctor){
    let i=this.doctorList.indexOf(d);
    this.doctorList[i].recommendation++;
  }

}
