import { Component, OnInit, Inject } from '@angular/core';
import Compte from '../models/Compte';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CompteService } from '../services/compte.service';

@Component({
  selector: 'app-form-compte',
  templateUrl: './form-compte.component.html',
  styleUrls: ['./form-compte.component.scss']
})
export class FormCompteComponent implements OnInit {

  Compte : Compte;
  compteForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private compteService : CompteService, public MatdialogRef: MatDialogRef<FormCompteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {
    this.compteForm = this.formBuilder.group({
      totalPo: this.data['totalPo'],
      totalPa: this.data['totalPa'],
      totalPc: this.data['totalPc'],

  });
  console.log(this.data);
  }

  get f() { return this.compteForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.compteForm.invalid) {
        console.log('pascool');
        return;
    }

    this.updateCompte(this.data['id'], this.f.totalPo.value, this.f.totalPa.value, this.f.totalPc.value);
    this.MatdialogRef.close();
    
}

  updateCompte(id : number, totalPo: number, totalPa: number, totalPc : number): void {
    
    this.compteService.updateCompte({totalPo, totalPa, totalPc} as any, id).subscribe(data => console.log('ok'));
  } 

}
