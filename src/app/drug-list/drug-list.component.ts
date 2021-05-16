import { Component, OnInit } from '@angular/core';
import { Drug } from '../model/drug';

import { DrugsService } from '../shared/drugs.service';

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css']
})
export class DrugListComponent implements OnInit {
  drugList: Drug[];
  drug: Drug;

  constructor(private drugsService: DrugsService ) { }

  ngOnInit(): void {
    
    this.drugsService.getAll().subscribe(
      (data: Drug[]) => this.drugList = data);
      
}
}
