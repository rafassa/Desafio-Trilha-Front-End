import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDashBoardComponent } from './select-dash-board.component';

describe('SelectDashBoardComponent', () => {
  let component: SelectDashBoardComponent;
  let fixture: ComponentFixture<SelectDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDashBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
