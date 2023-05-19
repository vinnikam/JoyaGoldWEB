import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailproductoComponent } from './detailproducto.component';

describe('DetailproductoComponent', () => {
  let component: DetailproductoComponent;
  let fixture: ComponentFixture<DetailproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailproductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
