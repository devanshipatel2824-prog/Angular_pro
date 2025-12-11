import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ordersucess } from './ordersucess';

describe('Ordersucess', () => {
  let component: Ordersucess;
  let fixture: ComponentFixture<Ordersucess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ordersucess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ordersucess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
