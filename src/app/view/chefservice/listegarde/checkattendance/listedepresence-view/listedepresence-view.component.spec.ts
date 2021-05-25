import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedepresenceViewComponent } from './listedepresence-view.component';

describe('ListedepresenceViewComponent', () => {
  let component: ListedepresenceViewComponent;
  let fixture: ComponentFixture<ListedepresenceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedepresenceViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedepresenceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
