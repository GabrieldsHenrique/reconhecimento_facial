import { RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
@Component({
  selector: 'app-externo',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './externo.component.html',
  styleUrl: './externo.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExternoComponent {


  slides = [
    {
      titulo: 'Relatórios de Frequência',
      descricao: 'Gere relatórios detalhados das frequências com apenas um clique, facilitando o acompanhamento de presença.',
      imagem: 'assets/slide2.svg'
    },
    {
      titulo: 'Análise Facial Automatizada',
      descricao: 'Use inteligência artificial para realizar a chamada automaticamente, simplificando o controle de presença na sala de aula.',
      imagem: 'assets/slide3.svg'
    },
    {
      titulo: 'Registro de Frequência',
      descricao: 'Registre as frequências de forma rápida e precisa, aproveitando a inteligência artificial para automatizar o processo.',
      imagem: 'assets/slide1.svg'
    },

    {
      titulo: 'Gestão Eficiente de Faltas',
      descricao: 'Gerencie e analise as faltas com gráficos e insights, ajudando a monitorar a média de presenças e melhorar o acompanhamento do aluno.',
      imagem: 'assets/slide4.svg'
    },

  ]
}
