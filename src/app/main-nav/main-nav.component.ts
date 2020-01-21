import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from '../services';
import Utilisateur from '../models/Utilisateur';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private router: Router,
    private authenticationService: AuthenticationService, private location: Location) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
  currentUser: Utilisateur;


  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
  backClicked() {
    this.location.back();
  }
}
