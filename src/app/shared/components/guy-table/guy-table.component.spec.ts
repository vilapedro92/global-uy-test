import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuyTableComponent } from './guy-table.component';

describe('GuyTableComponent', () => {
  let component: GuyTableComponent;
  let fixture: ComponentFixture<GuyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuyTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
