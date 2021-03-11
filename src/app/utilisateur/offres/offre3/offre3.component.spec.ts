import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offre3Component } from './offre3.component';

describe('Offre3Component', () => {
  let component: Offre3Component;
  let fixture: ComponentFixture<Offre3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Offre3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Offre3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
