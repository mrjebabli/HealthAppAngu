import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';
import { ListMedicamentComponent } from './list-medicament/list-medicament.component';
import { MedicamentComponent } from './medicament/medicament.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    ListDoctorComponent,
    ListMedicamentComponent,
    MedicamentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
