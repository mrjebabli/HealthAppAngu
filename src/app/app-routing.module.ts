import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DrugFormComponent } from './drug-form/drug-form.component';
import { DrugListComponent } from './drug-list/drug-list.component';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';
import { DrugDetailsComponent } from './drug-details/drug-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const ROUTES: Routes = [
  {path:'addmedicament',component:DrugFormComponent},
  {path:'drugs',component:DrugListComponent},
  {path:'doctors',component:ListDoctorComponent},
  {path:'drugs/:id',component:DrugDetailsComponent},
  {path:'**',component:NotFoundComponent}
  

  

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
