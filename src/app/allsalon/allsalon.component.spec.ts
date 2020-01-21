import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsalonComponent } from './allsalon.component';

describe('AllsalonComponent', () => {
  let component: AllsalonComponent;
  let fixture: ComponentFixture<AllsalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllsalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
