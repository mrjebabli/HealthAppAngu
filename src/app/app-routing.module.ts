import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DrugFormComponent } from './drug-form/drug-form.component';
import { DrugListComponent } from './drug-list/drug-list.component';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';
import { DrugDetailsComponent } from './drug-details/drug-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { DrugUpdateComponent } from './drug-update/drug-update.component';

const ROUTES: Routes = [
  { path: 'addmedicament', component: DrugFormComponent },
  { path: 'drugs', component: DrugListComponent },
  { path: 'doctors', component: ListDoctorComponent },
  { path: 'drugs/details/:id', component: DrugDetailsComponent },
  { path: 'drugs/:id', component: DrugUpdateComponent },

  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
