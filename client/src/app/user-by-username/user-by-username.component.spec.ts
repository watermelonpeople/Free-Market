import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserByUsernameComponent } from './user-by-username.component';

describe('UserByUsernameComponent', () => {
  let component: UserByUsernameComponent;
  let fixture: ComponentFixture<UserByUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserByUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserByUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
