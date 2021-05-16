import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../model/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  url = 'http://localhost:3000/doctors/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Doctor[]>(this.url);
  }
}
