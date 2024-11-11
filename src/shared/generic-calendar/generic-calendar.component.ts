import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output, input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-generic-calendar",
  standalone: true,
  imports: [InputTextModule, CommonModule, FormsModule,],
  templateUrl: "./generic-calendar.component.html",
  styleUrl: "./generic-calendar.component.scss",
})
export class GenericCalendarComponent {

  @Output() alterarData = new EventEmitter<Date>();

  @Input() expandir : boolean = false;

  @Input() mostrarIcone : boolean = false;

  @Input() nomeBotaoNavegacao : string  | undefined;
  @Output() navegacao  = new EventEmitter();

  @Input()
  card : boolean = true

  @Input()
  calendario : boolean = true

  @Input() filtrar : boolean = false
  @Output() filtro = new EventEmitter();

  anoAtual = new Date().getFullYear();
  mesAtual = new Date().getMonth();

  meses = [
    { nome: "Jan", icon: "ph-cheers" },
    { nome: "Fev", icon: "ph-mask-happy" },
    { nome: "Mar", icon: "ph-clover" },
    { nome: "Abr", icon: "ph-tooth" },
    { nome: "Mai", icon: "ph-briefcase" },
    { nome: "Jun", icon: "ph-snowflake" },
    { nome: "Jul", icon: "ph-soccer-ball" },
    { nome: "Ago", icon: "ph-handshake" },
    { nome: "Set", icon: "ph-flag" },
    { nome: "Out", icon: "ph-flower-tulip" },
    { nome: "Nov", icon: "ph-hand-fist" },
    { nome: "Dez", icon: "ph-sun-horizon" },
  ];

  nomeMesAtual = this.meses[this.mesAtual].nome

  alterarAno(operacao: 'adicionar' | 'subtrair') {
    operacao ==='adicionar' ? this.anoAtual++ : this.anoAtual--;
    this.criarData()
  }

  criarData(){
    const data = new Date(this.anoAtual, this.mesAtual, 1);
    this.alterarData.emit(data);
  }



}
