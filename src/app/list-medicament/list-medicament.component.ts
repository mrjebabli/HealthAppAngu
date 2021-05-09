import { Component, OnInit } from '@angular/core';
import { Medicament } from '../model/Medicament';

@Component({
  selector: 'app-list-medicament',
  templateUrl: './list-medicament.component.html',
  styleUrls: ['./list-medicament.component.css']
})
export class ListMedicamentComponent implements OnInit {
  medicamentList:Medicament[];

  constructor() { }

  ngOnInit(): void {
    this.medicamentList=[
      {id: 1 ,name:'DOLIPRANE VITAMINE C',Laboratory: 'WINTHROP PHARMA TUNISIE',Dosage:'500 MG',Form:'tablet',Price:4.160},
      {id: 2,name:'OSMOLAX',Laboratory: 'ADWYA',Dosage:'4 gr',Form:'Powder',Price:4.485},
      {id: 3 ,name:'BI-PROFENID LP',Laboratory: 'SANOFI-AVENTIS FRANCE',Dosage:'100 mg',Form:'tablet',Price:9.150},
     
              
      ];

  }

}
