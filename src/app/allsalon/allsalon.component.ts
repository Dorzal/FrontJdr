import { Component, OnInit } from '@angular/core';
import { SalonService } from '../services';
import Salon from '../models/Salon';

@Component({
  selector: 'app-allsalon',
  templateUrl: './allsalon.component.html',
  styleUrls: ['./allsalon.component.scss']
})
export class AllsalonComponent implements OnInit {

  Salons : Salon[];

  constructor(private salonService : SalonService) { }

  ngOnInit() {
    this.getRooms()
  }

  getRooms(){
    this.salonService.getRooms().subscribe(data => this.Salons = data);
  }

}
