import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbalsComponent } from './herbals.component';

describe('HerbalsComponent', () => {
  let component: HerbalsComponent;
  let fixture: ComponentFixture<HerbalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerbalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
