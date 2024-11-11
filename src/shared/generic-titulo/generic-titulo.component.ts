import { CommonModule } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { UtilService } from "../../core/service/util.service";

@Component({
  selector: "app-generic-titulo",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./generic-titulo.component.html",
  styleUrl: "./generic-titulo.component.scss",
})
export class GenericTituloComponent {
  utilService = inject(UtilService);

  @Input()
  voltar: number | undefined;

  @Input()
  border: boolean = true;

  @Input()
  posicao?: "left" | "right" | "center" = "left";

  @Input()
  titulo: string | undefined;

  @Input()
  descricao: string | undefined;

  @Input()
  tamanhoTitulo?: string = " text-3xl ";

  @Input()
  tamanhoDescricao?: string = " text-sm ";

  @Input()
  icone: string | undefined;
}
