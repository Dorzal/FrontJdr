import { Component, OnInit } from '@angular/core';
import Utilisateur from '../models/Utilisateur';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UtilisateurService } from '../services';
import { MustMatch } from '../helpers/must-match.validator';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  Utilisateur : Utilisateur;
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private utilisateurService : UtilisateurService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      pseudo: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, { validator: MustMatch('password', 'confirmPassword') });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.utilisateurService.newUtilisateur(this.registerForm.value).pipe(first()).subscribe(data => this.router.navigate(['/login']));
}

}
