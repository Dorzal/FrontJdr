import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Equipement from '../models/Equipement';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  apiUrl = `${environment.rootUrl}/equipements`;

  constructor(private http: HttpClient) { }

  getEquipement(id:number): Observable<Equipement> {
    let url = `${this.apiUrl}/${id}`;
    return this.http.get<Equipement>(url);
  }

  getEquipements(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(this.apiUrl, httpOptions);
  }

}
