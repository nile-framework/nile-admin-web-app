import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBrandComponent } from './app-brand.component';

describe('AppBrandComponent', () => {
  let component: AppBrandComponent;
  let fixture: ComponentFixture<AppBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
