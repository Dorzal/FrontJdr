import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services';
import Personnage from '../models/Personnage';


@Component({
  selector: 'app-mypersonnage',
  templateUrl: './mypersonnage.component.html',
  styleUrls: ['./mypersonnage.component.scss']
})
export class MypersonnageComponent implements OnInit {

  Perso : Personnage[];

  constructor(private utilisateurService : UtilisateurService) { }

  ngOnInit() {
    this.getMyPersonnage();
  }

  getMyPersonnage() {
    this.utilisateurService.getMyPersonnage().subscribe(data => this.Perso = data);
  }

}
