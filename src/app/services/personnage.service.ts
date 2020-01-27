import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Personnage from '../models/Personnage';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

const httpPatch = {
  headers: new HttpHeaders({ 'Content-Type': 'application/merge-patch+json', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  apiUrl = `${environment.rootUrl}/personnages`;

  constructor(private http: HttpClient) { }

  getPersonnage(id:number): Observable<Personnage> {
    let url = `${this.apiUrl}/${id}`;
    return this.http.get<Personnage>(url, httpOptions);
  }

  addPersonnage(personnage: Personnage): Observable<Personnage> {
    return this.http.post<Personnage>(this.apiUrl, personnage, httpOptions);
  }

  randomPersonnage(nom : string, salon) {
    let data = JSON.stringify( {nom : nom, salon: salon })
    return this.http.post(`${this.apiUrl}/random`, data, httpOptions);
  }

  deletePersonnage( id :number){
    
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<any>(url, httpOptions);
  }

  lvlup(lvl, id){
    const url = `${this.apiUrl}/${id}`;
    lvl = lvl +1;
    let data = JSON.stringify({"niveau" : lvl })
    return this.http.patch(url,data, httpPatch )
  }

  addclasse(classe, idclasse, idperso){
    const url = `${this.apiUrl}/${idperso}`;
    let data = JSON.stringify({"classe" : classe.puch(`${environment.rootUrl}/classes/${idclasse}`) })
    return this.http.patch(url,data, httpPatch )
  }

}