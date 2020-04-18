import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewforcustomerComponent } from './reviewforcustomer.component';

describe('ReviewforcustomerComponent', () => {
  let component: ReviewforcustomerComponent;
  let fixture: ComponentFixture<ReviewforcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewforcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewforcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
