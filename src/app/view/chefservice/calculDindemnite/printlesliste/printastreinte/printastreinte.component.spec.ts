import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintastreinteComponent } from './printastreinte.component';

describe('PrintastreinteComponent', () => {
  let component: PrintastreinteComponent;
  let fixture: ComponentFixture<PrintastreinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintastreinteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintastreinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
