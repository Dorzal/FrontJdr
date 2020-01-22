import { Component, OnInit } from '@angular/core';
import { SalonService } from '../services';
import { ActivatedRoute } from '@angular/router';
import Salon from '../models/Salon';
import { MatDialog } from '@angular/material';
import { FormPersonnageComponent } from '../form-personnage/form-personnage.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonnageService } from '../services/personnage.service';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.scss']
})
export class SalonComponent implements OnInit {

  salon : Salon;
  personnageForm: FormGroup;
  submitted = false;

  constructor(private personnageService : PersonnageService, private formBuilder: FormBuilder,private salonService: SalonService, private route: ActivatedRoute,public dialog: MatDialog) { }

  ngOnInit() {
    this.getSalon();
    this.personnageForm = this.formBuilder.group({nom: ['', Validators.required]});
  }

  get f() { return this.personnageForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.personnageForm.invalid) {
        return;
    }

    this.randomPersonnage(this.f.nom.value, this.salon.id);
    this.getSalon();
    
}


  openDialog(): void {
    const dialogRef = this.dialog.open(FormPersonnageComponent, {
      width: '800px', height: '500px', data: {salon: this.salon.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getSalon();
    });
  }

  getSalon() : void 
  {
    let id = +this.route.snapshot.paramMap.get('id');
    this.salonService.getSalon(id).subscribe(data => this.salon = data);
  }

  randomPersonnage(nom, salon) : void {
    this.personnageService.randomPersonnage(nom, salon).subscribe();
  }

}
