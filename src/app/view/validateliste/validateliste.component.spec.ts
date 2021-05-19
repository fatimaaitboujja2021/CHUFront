import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatelisteComponent } from './validateliste.component';

describe('ValidatelisteComponent', () => {
  let component: ValidatelisteComponent;
  let fixture: ComponentFixture<ValidatelisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatelisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatelisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
