import { Component, inject } from '@angular/core';
import { GenericCalendarComponent } from '../../../../shared/generic-calendar/generic-calendar.component';
import { AlunosComponent } from '../alunos/alunos.component';
import { GenericTableComponent } from '../../../../shared/generic-table/generic-table.component';
import {
  ColumnsTableDTO,
  ItensAcoesDTO,
} from '../../../../core/dto/generic-table.dto';
import { ProfessorService } from '../../../../core/service/professor.service';
import { UsuarioDTO } from '../../../../core/dto/usuario.dto';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UtilService } from '../../../../core/service/util.service';
import { ModalAlterarUsuarioComponent } from '../../modal/modal-alterar-usuario/modal-alterar-usuario.component';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [GenericCalendarComponent, AlunosComponent, GenericTableComponent],
  templateUrl: './professores.component.html',
  styleUrl: './professores.component.scss',
  providers: [DialogService, DynamicDialogRef],
})
export class ProfessoresComponent {
  professorService = inject(ProfessorService);
  dialogService = inject(DialogService);
  utilService = inject(UtilService);
  ref: DynamicDialogRef | undefined;

  data: { content: UsuarioDTO[] } = {
    content: [],
  };

  constructor() {
    this.pesquisar();
  }

  menuAction: ItensAcoesDTO[] = [
    // {
    //   action: 'editar',
    //   icon: 'ph-pencil-line',
    //   name: 'Editar',
    // },
    // {
    //   action: 'excluir',
    //   icon: 'ph-trash',
    //   name: 'Excluir',
    // },
    {
      action: 'visualizar',
      icon: 'ph-eye',
      name: 'Visualizar',
    },
  ];

  columns: ColumnsTableDTO[] = [
    {
      name: 'Nome',
      variavel: 'name',
      width: '25%',
      ordenar: true,
      type: 'text',
    },
    {
      name: 'Email',
      variavel: 'email',
      width: '25%',
      ordenar: true,
      type: 'text',
    },
    {
      name: 'Data de Nascimento',
      variavel: 'dateBirth',
      width: '20%',
      pipe: 'date',
      ordenar: true,
      type: 'text',
    },
    {
      name: 'CPF',
      variavel: 'cpf',
      width: '15%',
      ordenar: true,
      type: 'text',
    },
    {
      name: 'Telefone',
      variavel: 'cellphone',
      width: '15%',
      ordenar: true,
      type: 'text',
    },
  ];

  novo(event: any) {
    this.abrirModal();
  }

  acaoTabela(eventData: { item: any; action: string }) {
    switch (eventData.action) {
      case 'editar':
        this.abrirModal(eventData.item);
        break;

      case 'excluir':
        this.professorService.deletar(eventData.item.id!).subscribe({
          next: () => {
            this.utilService.emitNotificacao(
              'success',
              'Aluno Deletado com Sucesso'
            ),
              this.pesquisar();
          },
          error: (err) => {
            this.utilService.emitNotificacao('error', err.error.message);
          },
        });
        break;

      default:
        break;
    }
  }

  pesquisar(event?: HttpParams ) {
    let params = event
    ? event
    : this.utilService.generateParamsPage(
        { first: 0, rows: 10 },
      );

      params = this.utilService.generateParamsFilters(params, {userType: 'professor'})

    this.professorService.buscarTodos(params).subscribe((res) => {
      this.data.content = res.data;
    });
  }

  abrirModal(usuario?: UsuarioDTO) {
    this.ref = this.dialogService.open(ModalAlterarUsuarioComponent, {
      width: '40rem',
      height: 'auto',
      contentStyle: { overflow: 'auto' },
      data: usuario,
      focusOnShow: false,
    });

    let request$;
    this.ref.onClose.subscribe((res) => {
      if (res) {
        if (usuario) {
          request$ = this.professorService.alterar({ ...res, id: usuario.id });
        } else {
          request$ = this.professorService.criar(res);
        }

        request$.subscribe({
          next: () => {
            this.utilService.emitNotificacao(
              'success',
              'Usuário Cadastrado com sucesso'
            );
            this.pesquisar();
          },
          error: (err) => {
            this.utilService.emitNotificacao('error', err?.error);
          },
        });
      }
    });
  }
}
