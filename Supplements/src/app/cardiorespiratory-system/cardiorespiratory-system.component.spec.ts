import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiorespiratorySystemComponent } from './cardiorespiratory-system.component';

describe('CardiorespiratorySystemComponent', () => {
  let component: CardiorespiratorySystemComponent;
  let fixture: ComponentFixture<CardiorespiratorySystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardiorespiratorySystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardiorespiratorySystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
