import { NovaDisciplinaService } from './nova-disciplina.service';
import { Component, inject } from '@angular/core';
import { GenericTituloComponent } from "../../../../../shared/generic-titulo/generic-titulo.component";
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CampoComponent } from "../../../../../shared/formulario/campo/campo.component";
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioCadastroDisciplina } from '../../../../../core/formularios/disciplina/formularioDisciplina.model';
import { DisciplinaService } from '../../../../../core/service/disciplina.service';
import { DisciplinaDTO } from '../../../../../core/dto/disciplina.dto';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilService } from '../../../../../core/service/util.service';

@Component({
  selector: 'app-nova-disciplina',
  standalone: true,
  imports: [GenericTituloComponent, CampoComponent, ReactiveFormsModule],
  templateUrl: './nova-disciplina.component.html',
  styleUrl: './nova-disciplina.component.scss'
})
export class NovaDisciplinaComponent {
  config = inject(DynamicDialogConfig);
  ref = inject(DynamicDialogRef);
  novaDisciplinaService = inject(NovaDisciplinaService)
  form = this.novaDisciplinaService.gerarForm(this.config.data);
  disciplinaService = inject(DisciplinaService);
  spinner = inject(NgxSpinnerService);
  utilService =inject(UtilService)

  estrutura = FormularioCadastroDisciplina


  cadastrar(){
    this.spinner.show()
    this.disciplinaService.criar(this.form.value as DisciplinaDTO).subscribe({
      next:() =>{
        this.utilService.emitNotificacao('success', 'Disciplina cadastrada com sucesso!')

        this.ref.close(true)
        this.spinner.hide()
      },
      error: (err) => {
        this.utilService.emitNotificacao('error', err?.error?.message)
        this.spinner.hide()
      }
    })
  }
}
