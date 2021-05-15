import { Component, Input, OnInit } from '@angular/core';
import { Drug } from '../model/Drug';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {
  @Input() drug: Drug;

  constructor() { }

  ngOnInit(): void {
  }

}
