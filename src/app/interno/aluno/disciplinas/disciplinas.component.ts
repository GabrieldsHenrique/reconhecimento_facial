import { HttpParams } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DisciplinaDTO } from '../../../../core/dto/disciplina.dto';
import { DisciplinaService } from '../../../../core/service/disciplina.service';
import { UtilService } from '../../../../core/service/util.service';
import { NovaDisciplinaComponent } from '../../admin/disciplinas/nova-disciplina/nova-disciplina.component';
import { GenericCalendarComponent } from '../../../../shared/generic-calendar/generic-calendar.component';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [GenericCalendarComponent],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss',
})
export class DisciplinasComponent {
  utilService = inject(UtilService);
  spinner = inject(NgxSpinnerService);
  disciplinaService = inject(DisciplinaService);
  data: { content: DisciplinaDTO[] } = {
    content: [],
  };

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(event?: HttpParams) {
    let params = event
      ? event
      : this.utilService.generateParamsPage({ first: 0, rows: 10 });

    params = this.utilService.generateParamsFilters(params, {
      userType: 'professor',
    });

    this.disciplinaService.buscarTodos(params).subscribe((res) => {
      this.data.content = res.data;
    });
  }

  inscrever(id: number) {
    this.spinner.show();
    this.disciplinaService
      .inscrever({ studentsId: [this.utilService.me()?.id!] }, id)
      .subscribe({
        next: () => {
          this.spinner.hide();
          this.pesquisar()
          this.utilService.emitNotificacao(
            'success',
            'Inscrição realizada com sucesso'
          );
        },
        error: (err) => {
          this.spinner.hide();
          this.utilService.emitNotificacao('error', err?.error?.message);
        },
      });
  }

  verificaInscricao(disciplina: DisciplinaDTO){
    return disciplina.students?.some(aluno => aluno.id === this.utilService.me()?.id!)
  }
}
