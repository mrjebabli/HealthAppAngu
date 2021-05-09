import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from '../model/Doctor';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  @Input() doctor: Doctor;
  constructor() { }

  ngOnInit(): void {
    
  }

}
