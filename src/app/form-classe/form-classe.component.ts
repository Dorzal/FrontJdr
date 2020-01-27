import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Classe from '../models/Classe';
import { PersonnageService } from '../services/personnage.service';
import { ClasseService } from '../services/classe.service';

@Component({
  selector: 'app-form-classe',
  templateUrl: './form-classe.component.html',
  styleUrls: ['./form-classe.component.scss']
})
export class FormClasseComponent implements OnInit {

  Classes : Classe[];
  classeForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private personnageService : PersonnageService , private classService : ClasseService, public MatdialogRef: MatDialogRef<FormClasseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {
    this.getClasses();
    this.classeForm = this.formBuilder.group({
      classe: ['', Validators.required],
  });
  console.log(this.data);
  }

  get f() { return this.classeForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.classeForm.invalid) {
      console.log('ici');
        return;
    }

    this.addClasse(this.data['classe'], this.f.classe.value, this.data['classe2'], this.data['classe3'], this.data['id']);
    this.MatdialogRef.close();
    
  }

  addClasse(classe1, classeid ,classe2id, classe3id, persoid){
    this.personnageService.addclasse(classe1, classeid,classe2id, classe3id, persoid).subscribe();
  }
  getClasses(): void{
    this.classService.getClasses().subscribe(classe => this.Classes = classe);
  }
}
