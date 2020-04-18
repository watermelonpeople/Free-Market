import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductforsellerComponent } from './productforseller.component';

describe('ProductforsellerComponent', () => {
  let component: ProductforsellerComponent;
  let fixture: ComponentFixture<ProductforsellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductforsellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductforsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
