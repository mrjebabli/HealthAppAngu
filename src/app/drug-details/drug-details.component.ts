import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.component.html',
  styleUrls: ['./drug-details.component.css']
})
export class DrugDetailsComponent implements OnInit {
    id:number;
    name: string;
    Laboratory: string;
    Dosage:string;
    Form:string;
    quantity: number;
    Price:number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.name=this.route.snapshot.params.name;
    this.Laboratory=this.route.snapshot.params.Laboratory;
    this.Dosage=this.route.snapshot.params.Dosage;
    this.Form=this.route.snapshot.params.Form;
  }

}
