import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavbarUserComponent } from './app-navbar-user.component';

describe('AppNavbarUserComponent', () => {
  let component: AppNavbarUserComponent;
  let fixture: ComponentFixture<AppNavbarUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavbarUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavbarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
