import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuyFormFieldInputPasswordComponent } from './guy-form-field-input-password.component';

describe('GuyFormFieldInputPasswordComponent', () => {
  let component: GuyFormFieldInputPasswordComponent;
  let fixture: ComponentFixture<GuyFormFieldInputPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuyFormFieldInputPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuyFormFieldInputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
