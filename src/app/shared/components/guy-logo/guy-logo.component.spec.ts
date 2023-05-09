import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuyLogoComponent } from './guy-logo.component';

describe('GuyLogoComponent', () => {
  let component: GuyLogoComponent;
  let fixture: ComponentFixture<GuyLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuyLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
