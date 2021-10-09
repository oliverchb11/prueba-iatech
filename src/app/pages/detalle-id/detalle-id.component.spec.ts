import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleIdComponent } from './detalle-id.component';

describe('DetalleIdComponent', () => {
  let component: DetalleIdComponent;
  let fixture: ComponentFixture<DetalleIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
