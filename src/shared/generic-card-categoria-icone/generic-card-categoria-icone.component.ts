import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardDTO } from '../../core/dto/genericCards.dto';


@Component({
  selector: 'app-generic-card-categoria-icone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-card-categoria-icone.component.html',
  styleUrl: './generic-card-categoria-icone.component.scss'
})
export class GenericCardCategoriaIconeComponent {

  @Output()
  alterarOpcao = new EventEmitter<string>();

  @Input()
  opcao:string| undefined | null

  @Input()
  cards !: CardDTO[]

}
