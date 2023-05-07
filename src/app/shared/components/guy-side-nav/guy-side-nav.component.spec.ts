import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuySideNavComponent } from './guy-side-nav.component';

describe('GuySideNavComponent', () => {
  let component: GuySideNavComponent;
  let fixture: ComponentFixture<GuySideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuySideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuySideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
