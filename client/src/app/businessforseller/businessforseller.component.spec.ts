import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessforsellerComponent } from './businessforseller.component';

describe('BusinessforsellerComponent', () => {
  let component: BusinessforsellerComponent;
  let fixture: ComponentFixture<BusinessforsellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessforsellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessforsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
