import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileforsellerComponent } from './profileforseller.component';

describe('ProfileforsellerComponent', () => {
  let component: ProfileforsellerComponent;
  let fixture: ComponentFixture<ProfileforsellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileforsellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileforsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
