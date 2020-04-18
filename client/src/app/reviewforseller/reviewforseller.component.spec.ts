import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewforsellerComponent } from './reviewforseller.component';

describe('ReviewforsellerComponent', () => {
  let component: ReviewforsellerComponent;
  let fixture: ComponentFixture<ReviewforsellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewforsellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewforsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
