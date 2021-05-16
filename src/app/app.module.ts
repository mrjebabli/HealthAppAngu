import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';



import { DrugListComponent } from './drug-list/drug-list.component';
import { DrugFormComponent } from './drug-form/drug-form.component';
import { DrugComponent } from './drug/drug.component';
import { AppRoutingModule } from './app-routing.module';
import { DrugDetailsComponent } from './drug-details/drug-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {  HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DrugUpdateComponent } from './drug-update/drug-update.component';






@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    ListDoctorComponent,
    DrugListComponent,
    DrugComponent,
    DrugFormComponent,
    DrugDetailsComponent,
    NotFoundComponent,
    HomeComponent,
    DrugUpdateComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
