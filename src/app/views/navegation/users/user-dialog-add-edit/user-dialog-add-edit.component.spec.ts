import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogAddEditComponent } from './user-dialog-add-edit.component';

describe('UserDialogAddEditComponent', () => {
  let component: UserDialogAddEditComponent;
  let fixture: ComponentFixture<UserDialogAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDialogAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDialogAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
