import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSupportComponent } from './technical-support.component';

describe('TechnicalSupportComponent', () => {
  let component: TechnicalSupportComponent;
  let fixture: ComponentFixture<TechnicalSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
