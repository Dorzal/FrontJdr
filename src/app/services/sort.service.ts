import { Injectable } from '@angular/core';
import Sort from '../models/Sort';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  apiUrl = `${environment.rootUrl}/sorts`;
  constructor(private http: HttpClient) { }


  getSort(id:number): Observable<Sort> {
    let url = `${this.apiUrl}/${id}`;
    return this.http.get<Sort>(url);
  }

}
