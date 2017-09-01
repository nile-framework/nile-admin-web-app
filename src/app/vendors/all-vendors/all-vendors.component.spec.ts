import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVendorsComponent } from './all-vendors.component';

describe('AllVendorsComponent', () => {
  let component: AllVendorsComponent;
  let fixture: ComponentFixture<AllVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
