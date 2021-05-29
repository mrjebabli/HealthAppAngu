import { Component, OnInit } from '@angular/core';
import { Drug } from '../model/Drug';
import { DrugsService } from '../shared/drugs.service';

@Component({
  selector: 'app-drug-form',
  templateUrl: './drug-form.component.html',
  styleUrls: ['./drug-form.component.css'],
})
export class DrugFormComponent implements OnInit {
  drug: Drug;
  list: Drug[];
  constructor(private durgService: DrugsService) {}

  ngOnInit(): void {
    this.drug = new Drug();
    this.list = [];
  }
  addD() {
    this.durgService
      .addDrug(this.drug)
      .subscribe(() => (this.list = [this.drug, ...this.list]));
    window.location.pathname = '/drugs';
  }
}
