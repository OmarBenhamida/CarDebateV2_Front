import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrousserieComponent } from './carrousserie.component';

describe('CarrousserieComponent', () => {
  let component: CarrousserieComponent;
  let fixture: ComponentFixture<CarrousserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrousserieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrousserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
