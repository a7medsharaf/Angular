import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoopingeditComponent } from './shoopingedit.component';

describe('ShoopingeditComponent', () => {
  let component: ShoopingeditComponent;
  let fixture: ComponentFixture<ShoopingeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoopingeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoopingeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
