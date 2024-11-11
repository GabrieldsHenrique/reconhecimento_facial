import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiarTextoComponent } from './copiar-texto.component';

describe('CopiarTextoComponent', () => {
  let component: CopiarTextoComponent;
  let fixture: ComponentFixture<CopiarTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopiarTextoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopiarTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
