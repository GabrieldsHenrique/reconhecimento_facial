import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCodigosComponent } from './input-codigos.component';

describe('InputCodigosComponent', () => {
  let component: InputCodigosComponent;
  let fixture: ComponentFixture<InputCodigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCodigosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputCodigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
