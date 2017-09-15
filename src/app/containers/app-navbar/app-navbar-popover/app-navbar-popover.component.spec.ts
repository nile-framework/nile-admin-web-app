import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavbarPopoverComponent } from './app-navbar-popover.component';

describe('AppNavbarPopoverComponent', () => {
  let component: AppNavbarPopoverComponent;
  let fixture: ComponentFixture<AppNavbarPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavbarPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavbarPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
