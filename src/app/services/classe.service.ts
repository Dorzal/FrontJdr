import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Classe from '../models/Classe';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  apiUrl = `${environment.rootUrl}/classes`;

  constructor(private http: HttpClient) { }

  getClasses(): Observable<Classe[]> {
    return this.http.get<Classe[]>(this.apiUrl, httpOptions);
  }

}