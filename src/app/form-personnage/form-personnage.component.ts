import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Personnage from '../models/Personnage';
import { PersonnageService } from '../services/personnage.service';
import { ClasseService } from '../services/classe.service';
import Classe from '../models/Classe';



@Component({
  selector: 'app-form-personnage',
  templateUrl: './form-personnage.component.html',
  styleUrls: ['./form-personnage.component.scss']
})
export class FormPersonnageComponent implements OnInit {
  Personnages : Personnage[];
  Classes : Classe[];
  personnageForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,public MatdialogRef: MatDialogRef<FormPersonnageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any , private personnageService : PersonnageService, private classService : ClasseService, ) { }

  ngOnInit() {
    this.getClasses();
    this.personnageForm = this.formBuilder.group({
      nom: ['', Validators.required],
      force: [0, Validators.required],
      dexterite: [0, Validators.required],
      intelligence: [0, Validators.required],
      charisme: [0, Validators.required],
      constitution: [0, Validators.required],
      sagesse: [0, Validators.required],
      description: ['', Validators.required],
      classe: ['', Validators.required],
      categorieDe: [0, Validators.required],
      histoireDe: [0, Validators.required],
  });
  
  }

  get f() { return this.personnageForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.personnageForm.invalid) {
        return;
    }

    this.addPersonnage(this.f.nom.value, this.f.force.value, this.f.dexterite.value ,this.f.intelligence.value, this.f.charisme.value, this.f.constitution.value, this.f.sagesse.value, this.f.categorieDe.value, this.f.histoireDe.value,this.f.description.value, ['/api/classes/'+this.f.classe.value], '/api/salons/'+this.data['salon']);
    this.MatdialogRef.close();
    
}
  addPersonnage(nom :string, force :number, dexterite : number, intelligence :number, charisme :number, constitution :number, sagesse :number,categorieDe : number, histoireDe: number, description :string, classe :any,salon :any){

  this.personnageService.addPersonnage({nom, force, dexterite, intelligence, charisme, constitution, sagesse, categorieDe, histoireDe, description, classe ,salon} as any).subscribe();

  }

  getClasses(): void{
    this.classService.getClasses().subscribe(classe => this.Classes = classe);
  }

}
