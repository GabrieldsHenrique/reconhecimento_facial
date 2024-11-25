import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginComponentService {

  constructor() { }

  formBuilder = inject(FormBuilder);

  gerarForm() {
    return this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
}
