import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewResearchComponent } from './review-research.component';

describe('ReviewResearchComponent', () => {
  let component: ReviewResearchComponent;
  let fixture: ComponentFixture<ReviewResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
