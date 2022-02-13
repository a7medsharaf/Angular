import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servers3Component } from './servers3.component';

describe('Servers3Component', () => {
  let component: Servers3Component;
  let fixture: ComponentFixture<Servers3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servers3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Servers3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
