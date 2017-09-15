import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavMenuItemsComponent } from './app-nav-menu-items.component';

describe('AppNavMenuItemsComponent', () => {
  let component: AppNavMenuItemsComponent;
  let fixture: ComponentFixture<AppNavMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
