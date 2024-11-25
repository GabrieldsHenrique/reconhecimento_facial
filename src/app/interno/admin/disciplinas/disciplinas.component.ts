import { Component, inject, OnInit } from '@angular/core';
import { GenericCalendarComponent } from '../../../../shared/generic-calendar/generic-calendar.component';
import { GenericTableComponent } from '../../../../shared/generic-table/generic-table.component';
import {
  ItensAcoesDTO,
  ColumnsTableDTO,
} from '../../../../core/dto/generic-table.dto';
import { HttpParams } from '@angular/common/http';
import { UtilService } from '../../../../core/service/util.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DisciplinaService } from '../../../../core/service/disciplina.service';
import { DisciplinaDTO } from '../../../../core/dto/disciplina.dto';
import { NovaDisciplinaComponent } from './nova-disciplina/nova-disciplina.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [GenericCalendarComponent, GenericTableComponent],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss',
  providers: [DialogService, DynamicDialogRef],
})
export class DisciplinasComponent implements OnInit {
  utilService = inject(UtilService);
  spinner = inject(NgxSpinnerService);
  disciplinaService = inject(DisciplinaService);
  dialogService = inject(DialogService);
  ref: DynamicDialogRef | undefined;
  data: { content: DisciplinaDTO[] } = {
    content: [],
  };
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

  ngOnInit(): void {
    this.pesquisar();
  }

  acaoTabela(eventData: { item: any; action: string }) {
    // switch (eventData.action) {
    //   case 'editar':
    //     this.abrirModal(eventData.item);
    //     break;
    //   case 'excluir':
    //     this.professorService.deletar(eventData.item.id!).subscribe({
    //       next: () => {
    //         this.utilService.emitNotificacao(
    //           'success',
    //           'Aluno Deletado com Sucesso'
    //         ),
    //           this.pesquisar();
    //       },
    //       error: (err) => {
    //         this.utilService.emitNotificacao('error', err.error.message);
    //       },
    //     });
    //     break;
    //   default:
    //     break;
    // }
  }

  pesquisar(event?: HttpParams) {
    this.spinner.show();
    let params = event
      ? event
      : this.utilService.generateParamsPage({ first: 0, rows: 10 });

    params = this.utilService.generateParamsFilters(params, {
      userType: 'professor',
    });

    this.disciplinaService.buscarTodos(params).subscribe({
      next: (res) => {

        this.data.content = res.data.filter(disciplina => disciplina.teacher?.name === this.utilService.me()?.name)
        this.spinner.hide();
      },
      error: (err) => {
        this.spinner.hide();
      },
    });
  }

  novaDisciplina(diciplina?: DisciplinaDTO) {
    this.ref = this.dialogService.open(NovaDisciplinaComponent, {
      width: '40rem',
      height: 'auto',
      contentStyle: { overflow: 'auto' },
      data: diciplina,
      focusOnShow: false,
    });

    this.ref.onClose.subscribe((res) => {
      this.pesquisar();
    });
  }
}
