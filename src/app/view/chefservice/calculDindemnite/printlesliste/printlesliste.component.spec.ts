import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintleslisteComponent } from './printlesliste.component';

describe('PrintleslisteComponent', () => {
  let component: PrintleslisteComponent;
  let fixture: ComponentFixture<PrintleslisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintleslisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintleslisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
