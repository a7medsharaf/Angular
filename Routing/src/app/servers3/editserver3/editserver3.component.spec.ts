import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Editserver3Component } from './editserver3.component';

describe('Editserver3Component', () => {
  let component: Editserver3Component;
  let fixture: ComponentFixture<Editserver3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editserver3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Editserver3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
