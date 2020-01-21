import { Component, OnInit } from '@angular/core';
import { UtilisateurService, SalonService } from '../services';
import Personnage from '../models/Personnage';
import Salon from '../models/Salon';
import { MatDialog } from '@angular/material';
import { FormSalonComponent } from '../form-salon/form-salon.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Personnages : Personnage[];
  Salons : Salon[];

  constructor(
    private utilisateurService: UtilisateurService, public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getUtilisateurSalon();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormSalonComponent, {
      width: '800px', height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUtilisateurSalon();
    });
  }

  getUtilisateurSalon(): void{
    this.utilisateurService.getMySalon().subscribe(salon => this.Salons = salon);
  }
}
