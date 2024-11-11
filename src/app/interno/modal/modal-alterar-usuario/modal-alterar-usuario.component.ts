import { Component, inject } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GenericTituloComponent } from "../../../../shared/generic-titulo/generic-titulo.component";
import { FormularioCadastro, FormularioSimplesCadastro } from '../../../../core/formularios/cadastro-usuario/formularioCadastro.model';
import { ModalAlterarUsuarioService } from './modal-alterar-usuario.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CampoComponent } from '../../../../shared/formulario/campo/campo.component';

@Component({
  selector: 'app-modal-alterar-usuario',
  standalone: true,
  imports: [GenericTituloComponent, ReactiveFormsModule, CampoComponent],
  templateUrl: './modal-alterar-usuario.component.html',
  styleUrl: './modal-alterar-usuario.component.scss'
})
export class ModalAlterarUsuarioComponent {
  config = inject(DynamicDialogConfig);
  modalAlterarUsuarioService = inject(ModalAlterarUsuarioService)
  ref = inject(DynamicDialogRef);

  form = this.modalAlterarUsuarioService.gerarForm(this.config.data)

  estrutura = FormularioSimplesCadastro

  confirmar(){
    this.ref.close(this.form.value)
  }


}
