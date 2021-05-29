import { Component, Input, OnInit } from '@angular/core';
import { Drug } from '../model/Drug';
import { DrugsService } from '../shared/drugs.service';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css'],
})
export class DrugComponent implements OnInit {
  @Input() drug: Drug;
  ListDrug: Drug[];
  constructor(private Sce: DrugsService) {}

  ngOnInit(): void {}

  SuppDrug(id) {
    this.Sce.deleteDrug(id).subscribe(() => {
      this.ListDrug = this.ListDrug.filter((i) => i.id != id);
    });
    console.log('this id is ' + id);
    window.location.pathname = '/drugs';
  }
}
