import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editserver2Component } from './editserver2.component';

describe('Editserver2Component', () => {
  let component: Editserver2Component;
  let fixture: ComponentFixture<Editserver2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editserver2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Editserver2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
