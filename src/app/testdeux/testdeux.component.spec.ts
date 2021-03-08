import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdeuxComponent } from './testdeux.component';

describe('TestdeuxComponent', () => {
  let component: TestdeuxComponent;
  let fixture: ComponentFixture<TestdeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestdeuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
