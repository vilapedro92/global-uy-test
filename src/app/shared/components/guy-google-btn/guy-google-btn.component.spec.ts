import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuyGoogleBtnComponent } from './guy-google-btn.component';

describe('GuyGoogleBtnComponent', () => {
  let component: GuyGoogleBtnComponent;
  let fixture: ComponentFixture<GuyGoogleBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuyGoogleBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuyGoogleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
