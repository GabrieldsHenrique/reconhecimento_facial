import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlterarUsuarioComponent } from './modal-alterar-usuario.component';

describe('ModalAlterarUsuarioComponent', () => {
  let component: ModalAlterarUsuarioComponent;
  let fixture: ComponentFixture<ModalAlterarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAlterarUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAlterarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
