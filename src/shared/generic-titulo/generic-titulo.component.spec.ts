import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTituloComponent } from './generic-titulo.component';

describe('GenericTituloComponent', () => {
  let component: GenericTituloComponent;
  let fixture: ComponentFixture<GenericTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericTituloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
