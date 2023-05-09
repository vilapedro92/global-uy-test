import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuyButtonLoadingComponent } from './guy-button-loading.component';

describe('GuyButtonLoadingComponent', () => {
  let component: GuyButtonLoadingComponent;
  let fixture: ComponentFixture<GuyButtonLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuyButtonLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuyButtonLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
