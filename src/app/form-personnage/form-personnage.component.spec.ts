import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonnageComponent } from './form-personnage.component';

describe('FormPersonnageComponent', () => {
  let component: FormPersonnageComponent;
  let fixture: ComponentFixture<FormPersonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPersonnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
