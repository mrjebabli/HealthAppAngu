import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedicamentComponent } from './list-medicament.component';

describe('ListMedicamentComponent', () => {
  let component: ListMedicamentComponent;
  let fixture: ComponentFixture<ListMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
