import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelAndDockageComponent } from './fuel-and-dockage.component';

describe('FuelAndDockageComponent', () => {
  let component: FuelAndDockageComponent;
  let fixture: ComponentFixture<FuelAndDockageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelAndDockageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelAndDockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
