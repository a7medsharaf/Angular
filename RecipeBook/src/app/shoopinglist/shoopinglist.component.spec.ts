import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoopinglistComponent } from './shoopinglist.component';

describe('ShoopinglistComponent', () => {
  let component: ShoopinglistComponent;
  let fixture: ComponentFixture<ShoopinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoopinglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoopinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
