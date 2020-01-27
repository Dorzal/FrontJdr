import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Classe from '../models/Classe';
import { PersonnageService } from '../services/personnage.service';

@Component({
  selector: 'app-form-classe',
  templateUrl: './form-classe.component.html',
  styleUrls: ['./form-classe.component.scss']
})
export class FormClasseComponent implements OnInit {

  Classes : Classe[];
  classeForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private personnageService : PersonnageService, public MatdialogRef: MatDialogRef<FormClasseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {
    this.classeForm = this.formBuilder.group({
      classe: ['', Validators.required],
  });
  }

  get f() { return this.classeForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.classeForm.invalid) {
        return;
    }

    this.addClasse(this.data['classe'], this.f.classe.value, this.data['id']);
    this.MatdialogRef.close();
    
  }

  addClasse(classe, classeid, persoid){
    this.personnageService.addclasse(classe, classeid, persoid).subscribe();
  }
}
