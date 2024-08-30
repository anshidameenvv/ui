import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerDashBoardComponent } from './inner-dash-board.component';

describe('InnerDashBoardComponent', () => {
  let component: InnerDashBoardComponent;
  let fixture: ComponentFixture<InnerDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
