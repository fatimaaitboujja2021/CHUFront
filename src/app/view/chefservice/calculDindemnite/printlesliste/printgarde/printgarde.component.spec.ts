import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintgardeComponent } from './printgarde.component';

describe('PrintgardeComponent', () => {
  let component: PrintgardeComponent;
  let fixture: ComponentFixture<PrintgardeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintgardeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintgardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
