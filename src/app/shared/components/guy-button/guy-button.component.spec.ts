import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuyButtonComponent } from './guy-button.component';

describe('GuyButtonComponent', () => {
  let component: GuyButtonComponent;
  let fixture: ComponentFixture<GuyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuyButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
