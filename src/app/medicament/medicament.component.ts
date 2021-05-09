import { Component, Input, OnInit } from '@angular/core';
import { Medicament } from '../model/Medicament';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent implements OnInit {
  @Input() medicament: Medicament;

  constructor() { }

  ngOnInit(): void {
  }

}
