import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRejectDialogComponent } from './request-reject-dialog.component';

describe('RequestRejectDialogComponent', () => {
  let component: RequestRejectDialogComponent;
  let fixture: ComponentFixture<RequestRejectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestRejectDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestRejectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
