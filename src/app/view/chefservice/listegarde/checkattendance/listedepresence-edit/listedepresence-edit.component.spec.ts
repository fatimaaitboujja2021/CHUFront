import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedepresenceEditComponent } from './listedepresence-edit.component';

describe('ListedepresenceEditComponent', () => {
  let component: ListedepresenceEditComponent;
  let fixture: ComponentFixture<ListedepresenceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedepresenceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedepresenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
