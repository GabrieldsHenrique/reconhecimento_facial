import { Component, inject } from '@angular/core';
import { GenericCalendarComponent } from "../../../../shared/generic-calendar/generic-calendar.component";
import { HttpParams } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { DisciplinaDTO } from '../../../../core/dto/disciplina.dto';
import { DisciplinaService } from '../../../../core/service/disciplina.service';
import { UtilService } from '../../../../core/service/util.service';

@Component({
  selector: 'app-minhas-disciplinas',
  standalone: true,
  imports: [GenericCalendarComponent],
  templateUrl: './minhas-disciplinas.component.html',
  styleUrl: './minhas-disciplinas.component.scss'
})
export class MinhasDisciplinasComponent {
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

      this.data.content = res.data.filter(disciplina => this.verificaInscricao(disciplina))
    });
  }

  verificaInscricao(disciplina: DisciplinaDTO){
    return disciplina.students?.some(aluno => aluno.id === this.utilService.me()?.id!)
  }


}
