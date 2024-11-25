import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCardCategoriaIconeComponent } from './generic-card-categoria-icone.component';

describe('GenericCardCategoriaIconeComponent', () => {
  let component: GenericCardCategoriaIconeComponent;
  let fixture: ComponentFixture<GenericCardCategoriaIconeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericCardCategoriaIconeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericCardCategoriaIconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
