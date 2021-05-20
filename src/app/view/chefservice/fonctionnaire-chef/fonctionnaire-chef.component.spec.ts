import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionnaireChefComponent } from './fonctionnaire-chef.component';

describe('FonctionnaireChefComponent', () => {
  let component: FonctionnaireChefComponent;
  let fixture: ComponentFixture<FonctionnaireChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonctionnaireChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FonctionnaireChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
