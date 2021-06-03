import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculDindemniteListeComponent } from './calcul-dindemnite-liste.component';

describe('CalculDindemniteListeComponent', () => {
  let component: CalculDindemniteListeComponent;
  let fixture: ComponentFixture<CalculDindemniteListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculDindemniteListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculDindemniteListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
