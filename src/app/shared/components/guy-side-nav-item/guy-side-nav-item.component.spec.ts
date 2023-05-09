import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuySideNavItemComponent } from './guy-side-nav-item.component';

describe('GuySideNavItemComponent', () => {
  let component: GuySideNavItemComponent;
  let fixture: ComponentFixture<GuySideNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuySideNavItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuySideNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
