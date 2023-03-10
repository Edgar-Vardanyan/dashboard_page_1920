import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialLineComponent } from './radial-line.component';

describe('RadialLineComponent', () => {
  let component: RadialLineComponent;
  let fixture: ComponentFixture<RadialLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadialLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadialLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
