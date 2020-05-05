import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AminoAcidsComponent } from './amino-acids.component';

describe('AminoAcidsComponent', () => {
  let component: AminoAcidsComponent;
  let fixture: ComponentFixture<AminoAcidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AminoAcidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AminoAcidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
