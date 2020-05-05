import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NootropicsComponent } from './nootropics.component';

describe('NootropicsComponent', () => {
  let component: NootropicsComponent;
  let fixture: ComponentFixture<NootropicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NootropicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NootropicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
