import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Drug } from '../model/drug';

import { DrugsService } from '../shared/drugs.service';

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css']
})
export class DrugListComponent implements OnInit {
  drugList:Drug[];
  data : Drug[]
  constructor(private drugsService: DrugsService ) { }

  ngOnInit(): void {
    
    this.drugsService.getDrug().subscribe(
      (d : Drug[]) => this.drugList.d);
}
}
