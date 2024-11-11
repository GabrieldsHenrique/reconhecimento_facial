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

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [GenericCalendarComponent, AlunosComponent, GenericTableComponent],
  templateUrl: './professores.component.html',
  styleUrl: './professores.component.scss',
})
export class ProfessoresComponent {
  professorService = inject(ProfessorService);

  data: { content: UsuarioDTO[] } = {
    content: [],
  };

  constructor() {
    this.professorService.buscarTodos().subscribe((res) => {
      this.data.content = res;
    });
  }

  menuAction: ItensAcoesDTO[] = [
    {
      action: 'detalhes',
      icon: 'ph-file-text',
      name: 'Detalhes da transferência',
    },
    {
      action: 'comprovante',
      icon: 'ph-eye',
      name: 'Comprovante da transferência',
    },
    {
      action: 'reenviar',
      icon: 'ph-paper-plane',
      name: 'Reenviar comprovante',
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

  novo(event: any) {}
}
