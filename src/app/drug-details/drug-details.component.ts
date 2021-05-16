import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drug } from '../model/drug';
import { DrugsService } from '../shared/drugs.service';

@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.component.html',
  styleUrls: ['./drug-details.component.css']
})
export class DrugDetailsComponent implements OnInit {
  id:number;
  drugList: Drug[];
  drug: Drug;

  constructor(private route: ActivatedRoute,private drugsService: DrugsService) { }

  ngOnInit(): void {

    this.drug = new Drug;
    this.drugsService.getAll().subscribe(
      (data: Drug[]) => this.drugList = data);


    this.id=this.route.snapshot.params.id;

    this.drugsService.searchDrug(this.id).subscribe(
      (data: Drug) =>  this.drugsService.searchDrug(data.id)
      
    );
   
  }

}
