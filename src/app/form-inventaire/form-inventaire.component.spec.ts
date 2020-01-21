import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInventaireComponent } from './form-inventaire.component';

describe('FormInventaireComponent', () => {
  let component: FormInventaireComponent;
  let fixture: ComponentFixture<FormInventaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInventaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInventaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
