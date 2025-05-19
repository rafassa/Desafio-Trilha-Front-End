import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayValorComponent } from './display-valor.component';

describe('DisplayValorComponent', () => {
  let component: DisplayValorComponent;
  let fixture: ComponentFixture<DisplayValorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayValorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
