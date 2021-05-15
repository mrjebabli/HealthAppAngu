import { Component, OnInit } from '@angular/core';
import { Drug } from '../model/Drug';

@Component({
  selector: 'app-drug-form',
  templateUrl: './drug-form.component.html',
  styleUrls: ['./drug-form.component.css']
})
export class DrugFormComponent implements OnInit {
 
  drug:Drug
  list:Drug[];
  constructor() { }

  ngOnInit(): void {
    
    this.drug= new Drug();
    this.list=[];
  }
  save(){
    this.list.push(this.drug);
    console.log("after click");
    console.log(this.list);
  }
}
