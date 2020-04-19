import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmymessagesComponent } from './showmymessages.component';

describe('ShowmymessagesComponent', () => {
  let component: ShowmymessagesComponent;
  let fixture: ComponentFixture<ShowmymessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmymessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmymessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
