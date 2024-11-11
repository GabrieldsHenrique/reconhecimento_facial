import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCalendarComponent } from './generic-calendar.component';

describe('GenericCalendarComponent', () => {
  let component: GenericCalendarComponent;
  let fixture: ComponentFixture<GenericCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
