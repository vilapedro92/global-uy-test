import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuyFormFieldInputComponent } from './guy-form-field-input.component';

describe('GuyFormFieldInputComponent', () => {
  let component: GuyFormFieldInputComponent;
  let fixture: ComponentFixture<GuyFormFieldInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuyFormFieldInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuyFormFieldInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
