import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListegardeListComponent } from './listegarde-list.component';

describe('ListegardeListComponent', () => {
  let component: ListegardeListComponent;
  let fixture: ComponentFixture<ListegardeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListegardeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListegardeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
