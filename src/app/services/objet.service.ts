import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Objet from '../models/Objet';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ObjetService {

  apiUrl = `${environment.rootUrl}/objets`;

  constructor(private http: HttpClient) { }

  getObjet(id:number): Observable<Objet> {
    let url = `${this.apiUrl}/${id}`;
    return this.http.get<Objet>(url);
  }

  getObjets(): Observable<Objet[]> {
    return this.http.get<Objet[]>(this.apiUrl, httpOptions);
  }

}
