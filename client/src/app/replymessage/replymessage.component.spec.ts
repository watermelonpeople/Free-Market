import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplymessageComponent } from './replymessage.component';

describe('ReplymessageComponent', () => {
  let component: ReplymessageComponent;
  let fixture: ComponentFixture<ReplymessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplymessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplymessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
