import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnRadialComponent } from './column-radial.component';

describe('ColumnRadialComponent', () => {
  let component: ColumnRadialComponent;
  let fixture: ComponentFixture<ColumnRadialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnRadialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnRadialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
