import { Component, OnInit, Inject } from '@angular/core';
import { SortService } from '../services/sort.service';
import Sort from '../models/Sort';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-form-sort',
  templateUrl: './form-sort.component.html',
  styleUrls: ['./form-sort.component.scss']
})
export class FormSortComponent implements OnInit {

  sort : Sort;

  constructor(private sortService : SortService, public MatdialogRef: MatDialogRef<FormSortComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {
    this.getSort(this.data['id']);
  }



  getSort(id) {
    this.sortService.getSort(id).subscribe(data => this.sort = data);
  }

}
