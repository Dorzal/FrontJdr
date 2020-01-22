import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services';
import Personnage from '../models/Personnage';
import { PersonnageService } from '../services/personnage.service';


@Component({
  selector: 'app-mypersonnage',
  templateUrl: './mypersonnage.component.html',
  styleUrls: ['./mypersonnage.component.scss']
})
export class MypersonnageComponent implements OnInit {

  Perso : Personnage[];

  constructor(private utilisateurService : UtilisateurService, private personnageService : PersonnageService) { }

  ngOnInit() {
    this.getMyPersonnage();
  }

  getMyPersonnage() {
    this.utilisateurService.getMyPersonnage().subscribe(data => this.Perso = data);
  }

  deleteMyPersonnage(id : number) {
    this.personnageService.deletePersonnage(id).subscribe();
    this.getMyPersonnage();
  }

}
