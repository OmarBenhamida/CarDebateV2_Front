import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageVersionComponent } from './image-version.component';

describe('ImageVersionComponent', () => {
  let component: ImageVersionComponent;
  let fixture: ComponentFixture<ImageVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
