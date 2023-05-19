import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateproductoComponent } from './createproducto.component';

describe('CreateproductoComponent', () => {
  let component: CreateproductoComponent;
  let fixture: ComponentFixture<CreateproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateproductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
