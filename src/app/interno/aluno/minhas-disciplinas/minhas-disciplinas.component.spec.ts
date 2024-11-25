import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasDisciplinasComponent } from './minhas-disciplinas.component';

describe('MinhasDisciplinasComponent', () => {
  let component: MinhasDisciplinasComponent;
  let fixture: ComponentFixture<MinhasDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhasDisciplinasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinhasDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
