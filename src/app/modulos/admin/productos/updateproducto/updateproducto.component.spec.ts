import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateproductoComponent } from './updateproducto.component';

describe('UpdateproductoComponent', () => {
  let component: UpdateproductoComponent;
  let fixture: ComponentFixture<UpdateproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateproductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
