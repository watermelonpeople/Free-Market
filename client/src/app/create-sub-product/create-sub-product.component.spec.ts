import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubProductComponent } from './create-sub-product.component';

describe('CreateSubProductComponent', () => {
  let component: CreateSubProductComponent;
  let fixture: ComponentFixture<CreateSubProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
