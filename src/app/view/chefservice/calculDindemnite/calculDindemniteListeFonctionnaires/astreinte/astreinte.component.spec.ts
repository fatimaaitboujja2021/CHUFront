import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstreinteComponent } from './astreinte.component';

describe('AstreinteComponent', () => {
  let component: AstreinteComponent;
  let fixture: ComponentFixture<AstreinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstreinteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstreinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
