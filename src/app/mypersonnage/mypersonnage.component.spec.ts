import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypersonnageComponent } from './mypersonnage.component';

describe('MypersonnageComponent', () => {
  let component: MypersonnageComponent;
  let fixture: ComponentFixture<MypersonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypersonnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
