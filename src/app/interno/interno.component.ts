import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UtilService } from '../../core/service/util.service';


export interface PageDTO {
  label: string;
  rota: string;
  icon?: string;
  widht?: string;
  animacao?: string;
  labelSecondary?: string;
  descricao: string;
  disabled?: boolean;
  permissoes?: string[];
  ambas?: boolean;
}

@Component({
  selector: 'app-interno',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './interno.component.html',
  styleUrl: './interno.component.scss'
})
export class InternoComponent implements OnInit{
  utilService = inject(UtilService);
  router = inject(Router)
  menuPerfil = false
  pages :PageDTO[] = [ ];

ngOnInit(): void {
  if(this.utilService.me()?.identifier){
    this.pages = [
      {
        label: "Disciplinas",
        rota: "/professor/disciplinas",
        icon: "ph-book-bookmark",
        widht: "w-[8rem]",
        animacao: "hover:w-[8rem]",
        descricao: "Adicione e altere as disciplinas em sua lista.",
      },
      {
        label: "Alunos",
        rota: "/professor/alunos",
        icon: "ph-student",
        widht: " w-[6.4rem] ",
        animacao: " hover:w-[6.4rem] ",
        descricao: "Adicione e altere alunos em sua lista.",
      },
      {
        label: "Professores",
        rota: "/professor/professores",
        icon: "ph-chalkboard-teacher",
        widht: " w-[8.8rem]",
        animacao: " hover:w-[8.8rem] ",
        descricao: "Adicione e altere professores em sua lista.",
      },
      {
        label: "Cameras",
        rota: "/professor/cameras",
        icon: "ph-camera",
        widht: " w-[7rem] ",
        animacao: " hover:w-[7rem] ",
        descricao: "Adicione e altere as cameras em sua lista.",
      },
      {
        label: "Salas",
        rota: "/professor/salas",
        icon: "ph-chalkboard",
        widht: "w-[5.5rem]",
        animacao: "hover:w-[5.5rem]",
        descricao: "Adicione e altere as salas em sua lista.",
      },

    ]
  }else{
    this.pages = [
      {
        label: "Disciplinas",
        rota: "/aluno/disciplinas",
        icon: "ph-book-bookmark",
        widht: "w-[8rem]",
        animacao: "hover:w-[8rem]",
        descricao: "Adicione e altere as disciplinas em sua lista.",
      },
      {
        label: "Minhas disciplinas",
        rota: "/aluno/minhas-disciplinas",
        icon: "ph-bookmarks",
        widht: "w-[11.5rem]",
        animacao: "hover:w-[11.5rem]",
        descricao: "Adicione e altere as disciplinas em sua lista.",
      },
    ]
  }

}

  paginaAtual() : PageDTO | undefined{
    const paginasOcultas: PageDTO[] = [
      {
        label: "Meu perfil",
        rota: "/meu-perfil",
        descricao: "Personalize ou atualize as informações do seu perfil.",
        ambas: true,
      },
      ...this.pages,
    ];

    const rotas = this.router.url.split("/");
    const rotaPainel = paginasOcultas.find((page) =>
      page.rota.includes( rotas[rotas.length -1]
      )
    );
    return rotaPainel;
  }
}
