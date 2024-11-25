import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from "primeng/toast";
import { UtilService } from '../core/service/util.service';
import { MessageService } from 'primeng/api';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, InputTextModule, ToastModule, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService]
})
export class AppComponent implements OnInit{
  utilService = inject(UtilService);
  messageService = inject(MessageService);
  constructor() {
    this.utilService.notificationObserver.subscribe((data) => {
      this.messageService.add({
        severity: data.status,
        summary: data.message,
        life: data.time,
      });
    });

  }
  title = 'reconhecimento_facial';


  ngOnInit(): void {
      this.utilService.buscarMe()
  }
}
