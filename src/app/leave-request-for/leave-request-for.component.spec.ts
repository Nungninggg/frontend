import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestForComponent } from './leave-request-for.component';

describe('LeaveRequestForComponent', () => {
  let component: LeaveRequestForComponent;
  let fixture: ComponentFixture<LeaveRequestForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveRequestForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveRequestForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
