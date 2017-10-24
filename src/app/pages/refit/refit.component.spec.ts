import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefitComponent } from './refit.component';

describe('RefitComponent', () => {
  let component: RefitComponent;
  let fixture: ComponentFixture<RefitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
