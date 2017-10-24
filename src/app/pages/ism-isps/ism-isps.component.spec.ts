import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsmIspsComponent } from './ism-isps.component';

describe('IsmIspsComponent', () => {
  let component: IsmIspsComponent;
  let fixture: ComponentFixture<IsmIspsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsmIspsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsmIspsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
