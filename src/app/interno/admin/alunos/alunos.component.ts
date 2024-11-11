import { Component, inject } from '@angular/core';
import { GenericCalendarComponent } from '../../../../shared/generic-calendar/generic-calendar.component';
import { GenericTableComponent } from '../../../../shared/generic-table/generic-table.component';
import {
  ColumnsTableDTO,
  ItensAcoesDTO,
} from '../../../../core/dto/generic-table.dto';
import { UsuarioDTO } from '../../../../core/dto/usuario.dto';
import { AlunoService } from '../../../../core/service/aluno.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalAlterarUsuarioComponent } from '../../modal/modal-alterar-usuario/modal-alterar-usuario.component';
import { UtilService } from '../../../../core/service/util.service';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [GenericCalendarComponent, GenericTableComponent],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss',
  providers: [DialogService, DynamicDialogRef],
})
export class AlunosComponent {
  alunoService = inject(AlunoService);
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
    {
      action: 'editar',
      icon: 'ph-pencil-line',
      name: 'Editar',
    },
    {
      action: 'excluir',
      icon: 'ph-trash',
      name: 'Excluir',
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

  acaoTabela(eventData: { item: UsuarioDTO; action: string }) {
    switch (eventData.action) {
      case 'editar':
        this.abrirModal(eventData.item);
        break;

      case 'excluir':
        this.alunoService.deletar(eventData.item.id!).subscribe({
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

  pesquisar() {
    this.alunoService.buscarTodos().subscribe((res) => {
      this.data.content = res;
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
          request$ = this.alunoService.alterar({ ...res, id: usuario.id });
        } else {
          request$ = this.alunoService.criar(res);
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
