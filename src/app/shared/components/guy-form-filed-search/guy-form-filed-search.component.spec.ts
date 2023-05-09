import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuyFormFiledSearchComponent } from './guy-form-filed-search.component';

describe('GuyFormFiledSearchComponent', () => {
  let component: GuyFormFiledSearchComponent;
  let fixture: ComponentFixture<GuyFormFiledSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuyFormFiledSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuyFormFiledSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
