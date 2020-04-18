import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdComponent } from './get-id.component';

describe('GetIdComponent', () => {
  let component: GetIdComponent;
  let fixture: ComponentFixture<GetIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
