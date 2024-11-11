import { Component, inject } from '@angular/core';
import { GenericCalendarComponent } from "../../../../shared/generic-calendar/generic-calendar.component";
import { GenericTableComponent } from "../../../../shared/generic-table/generic-table.component";
import { ColumnsTableDTO, ItensAcoesDTO } from '../../../../core/dto/generic-table.dto';
import { UsuarioDTO } from '../../../../core/dto/usuario.dto';
import { AlunoService } from '../../../../core/service/aluno.service';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [GenericCalendarComponent, GenericTableComponent],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss'
})
export class AlunosComponent {
  alunoService = inject(AlunoService);

  data: { content: UsuarioDTO[] } = {
    content: [],
  };

  constructor() {
    this.alunoService.buscarTodos().subscribe((res) => {
      this.data.content = res;
    });
  }

  menuAction: ItensAcoesDTO[] = [
    {
      action: 'editar',
      icon: 'ph-file-text',
      name: 'Editar',
    },
    {
      action: 'excluir',
      icon: 'ph-file-text',
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

  novo(event: any) {}
}
