import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIndustryComponent } from './new-industry.component';

describe('NewIndustryComponent', () => {
  let component: NewIndustryComponent;
  let fixture: ComponentFixture<NewIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
