import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChidComponet } from './chid-componet';

describe('ChidComponet', () => {
  let component: ChidComponet;
  let fixture: ComponentFixture<ChidComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChidComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChidComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
