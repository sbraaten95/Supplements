import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NervousSystemComponent } from './nervous-system.component';

describe('NervousSystemComponent', () => {
  let component: NervousSystemComponent;
  let fixture: ComponentFixture<NervousSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NervousSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NervousSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
