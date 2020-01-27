import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSortComponent } from './form-sort.component';

describe('FormSortComponent', () => {
  let component: FormSortComponent;
  let fixture: ComponentFixture<FormSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
