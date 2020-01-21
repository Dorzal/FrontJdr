import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Utilisateur from '../models/Utilisateur';
import { Observable } from 'rxjs';
import Salon from '../models/Salon';
import Personnage from '../models/Personnage';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthenticationService } from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  apiUrl = `${environment.rootUrl}/utilisateurs`;
  constructor(private http: HttpClient, private auth: AuthenticationService) { }


  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl);
  }

  getUtilisateur(id:number): Observable<Utilisateur> {
    let url = `${this.apiUrl}/${id}`;
    return this.http.get<Utilisateur>(url);
  }

  getMySalon(): Observable<Salon[]> {
    let token = this.auth.currentUserValue['token'];
    let helper = new JwtHelperService();
    let decode = helper.decodeToken(token)
    let url = `${this.apiUrl}/${decode['id']}/salons`;
    return this.http.get<Salon[]>(url, httpOptions);
  }

  getMyPersonnage(): Observable<Personnage[]> {
    let token = this.auth.currentUserValue['token'];
    let helper = new JwtHelperService();
    let decode = helper.decodeToken(token)
    let url = `${this.apiUrl}/${decode['id']}/personnages`;
    return this.http.get<Personnage[]>(url, httpOptions);
  }


  newUtilisateur(utilisateur : Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.apiUrl, httpOptions )
  }

}

