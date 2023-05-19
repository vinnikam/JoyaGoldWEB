import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoheaderComponent } from './productoheader.component';

describe('ProductoheaderComponent', () => {
  let component: ProductoheaderComponent;
  let fixture: ComponentFixture<ProductoheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
