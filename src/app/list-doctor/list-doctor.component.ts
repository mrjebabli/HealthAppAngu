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
      {id: 1,name:'Carly Lever',specialties:'pathologist',phone:26800200,mail:'c.lever@gmail.com' ,city:'tunis',recommendation:0},
      {id: 2,name: 'shaun murphy',specialties:'surgeon ',phone:98800200,mail:'s.murphy@gmail.com' ,city:'bardo',recommendation:0},
      {id: 1,name:'Carly Lever',specialties:'pathologist',phone:26800200,mail:'c.lever@gmail.com' ,city:'tunis',recommendation:0},
      {id: 2,name: 'shaun murphy',specialties:'surgeon ',phone:98800200,mail:'s.murphy@gmail.com' ,city:'bardo',recommendation:0}
  
    
    ];
  }

  incrementRecommendation(d: Doctor){
    let i=this.doctorList.indexOf(d);
    this.doctorList[i].recommendation++;
  }

}
