import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Personnage from '../models/Personnage';
import { PersonnageService } from '../services/personnage.service';
import { FormCompteComponent } from '../form-compte/form-compte.component';
import { MatDialog } from '@angular/material';
import { FormInventaireComponent } from '../form-inventaire/form-inventaire.component';
import { InventaireItemService } from '../services/inventaire-item.service';

@Component({
  selector: 'app-Personnage',
  templateUrl: './Personnage.component.html',
  styleUrls: ['./Personnage.component.scss']
})
export class PersonnageComponent implements OnInit {

  personnage : Personnage;

  constructor(private inventaireItemService : InventaireItemService ,private PersonnageService: PersonnageService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.getPersonnage();
  }

  getPersonnage() : void 
  {
    let id = +this.route.snapshot.paramMap.get('id');
    this.PersonnageService.getPersonnage(id).subscribe(data => this.personnage = data);
  }

  deleteInventaireItem(id :number)
  {
    this.inventaireItemService.deleteInventaireItem(id).subscribe();
    this.getPersonnage();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormCompteComponent, {
      width: '400px', height: '300px', data: {totalPo: this.personnage.compte['totalPo'], totalPa: this.personnage.compte['totalPa'], totalPc: this.personnage.compte['totalPc'], id: this.personnage.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPersonnage();
    });
  }

  openDialogInventaire(id): void {
    const dialogRef = this.dialog.open(FormInventaireComponent, {
      width: '400px', height: '300px', data: { id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPersonnage();
    });
  }
}