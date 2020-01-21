import { Component, OnInit, Inject } from '@angular/core';
import Inventaire from '../models/Inventaire';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InventaireItemService } from '../services/inventaire-item.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ObjetService } from '../services/objet.service';
import Objet from '../models/Objet';


@Component({
  selector: 'app-form-inventaire',
  templateUrl: './form-inventaire.component.html',
  styleUrls: ['./form-inventaire.component.scss']
})
export class FormInventaireComponent implements OnInit {

  Inventaire : Inventaire;
  inventaireForm: FormGroup;
  submitted = false;
  Obj : Objet[];


  constructor(private objetService : ObjetService, private formBuilder: FormBuilder, private InventaireItemService : InventaireItemService, public MatdialogRef: MatDialogRef<FormInventaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {
    this.getObj();
    this.inventaireForm = this.formBuilder.group({
      objet: ['', Validators.required],

  });
  }

  get f() { return this.inventaireForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.inventaireForm.invalid) {
        return;
    }

    this.addInventaire(this.data['id'], this.f.objet.value);
    this.MatdialogRef.close();
    
}

  addInventaire(id: number, objet : number){
      this.InventaireItemService.addInventaireItem(id, objet).subscribe();
  }

  getObj(){
    this.objetService.getObjets().subscribe(data => this.Obj = data);
  }



}
