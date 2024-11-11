
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-copiar-texto',
  standalone: true,
  imports: [ CommonModule, TooltipModule, ToastModule],
  templateUrl: './copiar-texto.component.html',
  styleUrl: './copiar-texto.component.scss',
  providers: [MessageService]
})
export class CopiarTextoComponent {
  @Input()
  texto: string | undefined

  @Input()
  classe: string | undefined

  iconeCopiar: boolean = false

  constructor(private messageService: MessageService) {}

  copiar(){
    this.messageService.add({ key: 'copiar', severity: '', summary: 'Texto copiado para a área de transferência!' });
  }
}
