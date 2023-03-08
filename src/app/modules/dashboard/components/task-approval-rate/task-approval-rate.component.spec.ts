import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskApprovalRateComponent } from './task-approval-rate.component';

describe('TaskApprovalRateComponent', () => {
  let component: TaskApprovalRateComponent;
  let fixture: ComponentFixture<TaskApprovalRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskApprovalRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskApprovalRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
