import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigestiveSystemComponent } from './digestive-system.component';

describe('DigestiveSystemComponent', () => {
  let component: DigestiveSystemComponent;
  let fixture: ComponentFixture<DigestiveSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigestiveSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigestiveSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
