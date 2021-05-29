import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drug } from '../model/drug';

@Injectable({
  providedIn: 'root',
})
export class DrugsService {
  url = 'http://localhost:3000/drugs/';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Drug[]>(this.url);
  }

  addDrug(d: Drug) {
    return this.http.post(this.url, d);
  }
  deleteDrug(id: number) {
    return this.http.delete(this.url + id);
  }
  updateDrug(id: number, d: Drug) {
    return this.http.put(this.url + '/' + id, d);
  }

  getDrug(id) {
    return this.http.get(this.url + '/' + id);
  }

  searchDrug(id) {
    return this.http.get(this.url + '/' + id);
  }
}
