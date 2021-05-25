import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedepresencecreateComponent } from './listedepresencecreate.component';

describe('ListedepresencecreateComponent', () => {
  let component: ListedepresencecreateComponent;
  let fixture: ComponentFixture<ListedepresencecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedepresencecreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedepresencecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
