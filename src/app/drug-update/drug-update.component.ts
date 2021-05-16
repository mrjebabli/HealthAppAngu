import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drug } from '../model/drug';
import { DrugsService } from '../shared/drugs.service';

@Component({
  selector: 'app-drug-update',
  templateUrl: './drug-update.component.html',
  styleUrls: ['./drug-update.component.css']
})
export class DrugUpdateComponent implements OnInit {
  drugList: Drug[];
  drug: Drug;
 
  id:number;
  constructor(private route: ActivatedRoute,private drugsService: DrugsService) { }

  ngOnInit(): void {
    this.drugsService.getAll().subscribe(
      (data: Drug[]) => this.drugList = data);


    this.id=this.route.snapshot.params.id;
  }

}
