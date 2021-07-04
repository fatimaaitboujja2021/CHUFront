import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatelisteShowComponent } from './validateliste-show.component';

describe('ValidatelisteShowComponent', () => {
  let component: ValidatelisteShowComponent;
  let fixture: ComponentFixture<ValidatelisteShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatelisteShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatelisteShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
