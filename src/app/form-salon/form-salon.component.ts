import { Component, OnInit, Inject } from '@angular/core';
import { SalonService } from '../services';
import Salon from '../models/Salon';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-form-salon',
  templateUrl: './form-salon.component.html',
  styleUrls: ['./form-salon.component.scss']
})
export class FormSalonComponent implements OnInit {

  Salons : Salon[];
  salonForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private salonService : SalonService, public MatdialogRef: MatDialogRef<FormSalonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {
    this.salonForm = this.formBuilder.group({
      nom: ['', Validators.required],
      info: ['', Validators.required]
  });
  }

  get f() { return this.salonForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.salonForm.invalid) {
        return;
    }

    this.addSalon(this.f.nom.value, this.f.info.value);
    this.MatdialogRef.close();
    
}

  addSalon(nom: string, info: string): void {
    if (!nom || !info) { return;}
    this.salonService.addSalon({nom, info} as Salon).subscribe();
  } 

}
