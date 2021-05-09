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
      {id: 1,name:'yosra',specialties:'dentist',phone:26800200,mail:'y.dentist@gmail.com' ,city:'tunis'},
      {id: 2,name: 'ahmed',specialties:'Cardiologists',phone:98800200,mail:'a.cardio@gmail.com' ,city:'bardo'}
    ];
  }

}
