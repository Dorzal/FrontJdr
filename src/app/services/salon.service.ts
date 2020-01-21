import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Salon from '../models/Salon';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  apiUrl = `${environment.rootUrl}/salons`;

  constructor(private http: HttpClient) { }

  getSalon(id:number): Observable<Salon> {
    let url = `${this.apiUrl}/${id}`;
    return this.http.get<Salon>(url);
  }

  addSalon( salon: Salon): Observable<Salon> {
    return this.http.post<Salon>(this.apiUrl, salon, httpOptions);
  }

  getRooms(): Observable<Salon[]> {
    return this.http.get<Salon[]>(this.apiUrl, httpOptions);
  }

}
