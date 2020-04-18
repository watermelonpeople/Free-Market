import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileforcustomerComponent } from './profileforcustomer.component';

describe('ProfileforcustomerComponent', () => {
  let component: ProfileforcustomerComponent;
  let fixture: ComponentFixture<ProfileforcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileforcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileforcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
