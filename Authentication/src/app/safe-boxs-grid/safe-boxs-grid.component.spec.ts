import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeBoxsGridComponent } from './safe-boxs-grid.component';

describe('SafeBoxsGridComponent', () => {
  let component: SafeBoxsGridComponent;
  let fixture: ComponentFixture<SafeBoxsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafeBoxsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeBoxsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
