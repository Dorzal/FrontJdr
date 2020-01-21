import { Injectable } from '@angular/core';
import Compte from '../models/Compte';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  apiUrl = `${environment.rootUrl}/comptes`;

  constructor(private http : HttpClient) { }

  updateCompte(Compte: Compte, id) : Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, Compte, httpOptions);
  }
}
