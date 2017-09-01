import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCitiesComponent } from './all-cities.component';

describe('AllCitiesComponent', () => {
  let component: AllCitiesComponent;
  let fixture: ComponentFixture<AllCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
