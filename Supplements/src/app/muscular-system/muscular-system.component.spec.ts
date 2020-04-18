import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscularSystemComponent } from './muscular-system.component';

describe('MuscularSystemComponent', () => {
  let component: MuscularSystemComponent;
  let fixture: ComponentFixture<MuscularSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuscularSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscularSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
