import { Injectable } from '@angular/core';
import InventaireItem from '../models/InventaireItems';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class InventaireItemService {
  
  apiUrl = `${environment.rootUrl}/inventaire_items`;

  constructor(private http:HttpClient) { }

  addInventaireItem( id: number, objet : number): Observable<any> {
    let paylod = JSON.stringify({inventaire: `/api/inventaires/${id}`, objet: `/api/objets/${objet}`});
    return this.http.post<any>(this.apiUrl, paylod , httpOptions);
  }

  deleteInventaireItem( id :number){
    
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<any>(url, httpOptions);
  }
}
