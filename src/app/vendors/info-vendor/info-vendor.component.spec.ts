import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVendorComponent } from './info-vendor.component';

describe('InfoVendorComponent', () => {
  let component: InfoVendorComponent;
  let fixture: ComponentFixture<InfoVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
