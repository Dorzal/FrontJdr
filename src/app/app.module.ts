import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatMenuModule} from '@angular/material/menu';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule, MatTableModule, MatDialogModule, MatTabsModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SalonComponent } from './salon/salon.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { FormSalonComponent } from './form-salon/form-salon.component';
import { FormPersonnageComponent } from './form-personnage/form-personnage.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { WikiComponent } from './wiki/wiki.component';
import { MypersonnageComponent } from './mypersonnage/mypersonnage.component';
import { AllsalonComponent } from './allsalon/allsalon.component';
import { FormCompteComponent } from './form-compte/form-compte.component';
import { FormInventaireComponent } from './form-inventaire/form-inventaire.component';
import { RegisterComponent } from './register/register.component';
import { FormClasseComponent } from './form-classe/form-classe.component';
import { FormSortComponent } from './form-sort/form-sort.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainNavComponent,
    SalonComponent,
    PersonnageComponent,
    FormSalonComponent,
    FormPersonnageComponent,
    WikiComponent,
    MypersonnageComponent,
    AllsalonComponent,
    FormCompteComponent,
    FormInventaireComponent,
    RegisterComponent,
    FormClasseComponent,
    FormSortComponent,
  ],
  imports: [
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents: [
    FormSalonComponent,
    FormPersonnageComponent,
    FormCompteComponent,
    FormInventaireComponent,
    FormClasseComponent,
    FormSortComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
