import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuyDivisorComponent } from './guy-divisor.component';

describe('GuyDivisorComponent', () => {
  let component: GuyDivisorComponent;
  let fixture: ComponentFixture<GuyDivisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuyDivisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuyDivisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
