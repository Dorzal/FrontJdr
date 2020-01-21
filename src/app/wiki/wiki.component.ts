import { Component, OnInit } from '@angular/core';
import { ObjetService } from '../services/objet.service';
import Objet from '../models/Objet';
import { EquipementService } from '../services/equipement.service';
import Equipement from '../models/Equipement';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {

  Obj : Objet[];
  Equip : Equipement[];

  constructor(private objetService: ObjetService, private equipementService : EquipementService) { }

  ngOnInit() {
    this.getObjets();
    this.getEquipements();
  }

  getObjets() :void {
    this.objetService.getObjets().subscribe(data => this.Obj = data);
  }

  getEquipements() : void {
    this.equipementService.getEquipements().subscribe(data => this.Equip = data);
  }

}
