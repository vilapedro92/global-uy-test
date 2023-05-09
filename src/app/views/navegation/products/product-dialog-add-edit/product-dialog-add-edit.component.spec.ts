import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDialogAddEditComponent } from './product-dialog-add-edit.component';

describe('ProductDialogAddEditComponent', () => {
  let component: ProductDialogAddEditComponent;
  let fixture: ComponentFixture<ProductDialogAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDialogAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDialogAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
