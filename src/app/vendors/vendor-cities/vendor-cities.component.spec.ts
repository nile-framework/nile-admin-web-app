import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCitiesComponent } from './vendor-cities.component';

describe('VendorCitiesComponent', () => {
  let component: VendorCitiesComponent;
  let fixture: ComponentFixture<VendorCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
