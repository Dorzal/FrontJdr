import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Personnage from '../models/Personnage';
import { PersonnageService } from '../services/personnage.service';
import { FormCompteComponent } from '../form-compte/form-compte.component';
import { MatDialog } from '@angular/material';
import { FormInventaireComponent } from '../form-inventaire/form-inventaire.component';
import { InventaireItemService } from '../services/inventaire-item.service';
import { FormClasseComponent } from '../form-classe/form-classe.component';
import Classe from '../models/Classe';
import { FormSortComponent } from '../form-sort/form-sort.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Component({
  selector: 'app-Personnage',
  templateUrl: './Personnage.component.html',
  styleUrls: ['./Personnage.component.scss']
})
export class PersonnageComponent implements OnInit {

  personnage : Personnage;
  noteForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private inventaireItemService : InventaireItemService ,private PersonnageService: PersonnageService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.getPersonnage();
    this.noteForm = this.formBuilder.group({
      note : this.personnage.note
  });
  }


  get f() { return this.noteForm.controls; }

  onSubmit() {
    this.submitted = true;

    this.patchNote(this.personnage.id, this.f.note.value);
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
      width: '400px', height: '300px', data: {totalPo: this.personnage.compte['totalPo'], totalPa: this.personnage.compte['totalPa'], totalPc: this.personnage.compte['totalPc'], id: this.personnage.compte['id']}
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

  openDialogClasse(id, idclasse, classe2, classe3 ): void {
    const dialogRef = this.dialog.open(FormClasseComponent, {
      width: '400px', height: '300px', data: { id: id, classe: idclasse, classe2: classe2, classe3: classe3 }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPersonnage();
    });
  }


  openDialogSort(id): void {
    const dialogRef = this.dialog.open(FormSortComponent, {
      width: '400px', height: '400px', data: { id: id}
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

  niveau(lvl, id) {
    this.PersonnageService.lvlup(lvl, id).subscribe(data => this.getPersonnage());
  }

  patchNote(id, note){
    this.PersonnageService.patchNote(id, note).subscribe();
  }
}