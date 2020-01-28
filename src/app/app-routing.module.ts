import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './helpers';
import { SalonComponent } from './salon/salon.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { WikiComponent } from './wiki/wiki.component';
import { MypersonnageComponent } from './mypersonnage/mypersonnage.component';
import { AllsalonComponent } from './allsalon/allsalon.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'wiki', component: WikiComponent},
  { path: 'mypersonnage', component: MypersonnageComponent},
  { path: "salon/:id", component: SalonComponent},
  { path: 'loby', component: AllsalonComponent},
  { path: "personnage/:id", component: PersonnageComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
