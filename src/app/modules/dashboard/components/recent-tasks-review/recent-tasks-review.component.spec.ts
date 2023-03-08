import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTasksReviewComponent } from './recent-tasks-review.component';

describe('RecentTasksReviewComponent', () => {
  let component: RecentTasksReviewComponent;
  let fixture: ComponentFixture<RecentTasksReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentTasksReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentTasksReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
