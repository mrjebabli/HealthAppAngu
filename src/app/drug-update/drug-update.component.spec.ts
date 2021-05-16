import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugUpdateComponent } from './drug-update.component';

describe('DrugUpdateComponent', () => {
  let component: DrugUpdateComponent;
  let fixture: ComponentFixture<DrugUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
