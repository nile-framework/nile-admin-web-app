import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVendorComponent } from './new-vendor.component';

describe('NewVendorComponent', () => {
  let component: NewVendorComponent;
  let fixture: ComponentFixture<NewVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
