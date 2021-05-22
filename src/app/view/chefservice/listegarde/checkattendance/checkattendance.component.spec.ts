import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckattendanceComponent } from './checkattendance.component';

describe('CheckattendanceComponent', () => {
  let component: CheckattendanceComponent;
  let fixture: ComponentFixture<CheckattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckattendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
