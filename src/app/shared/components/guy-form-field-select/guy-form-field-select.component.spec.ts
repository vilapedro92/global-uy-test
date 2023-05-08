import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuyFormFieldSelectComponent } from './guy-form-field-select.component';

describe('GuyFormFieldSelectComponent', () => {
  let component: GuyFormFieldSelectComponent;
  let fixture: ComponentFixture<GuyFormFieldSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuyFormFieldSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuyFormFieldSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
