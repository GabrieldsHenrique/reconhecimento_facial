import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DisciplinaDTO } from '../../../../../core/dto/disciplina.dto';


@Injectable({
  providedIn: 'root'
})
export class NovaDisciplinaService {

  constructor() { }

  formBuilder = inject(FormBuilder);

  gerarForm(disciplina ? : DisciplinaDTO) {
    return this.formBuilder.group({
      name: [disciplina?.name, [Validators.required]],
      ipCamera: [disciplina?.ipCamera, [Validators.required]],
      code: [disciplina?.code, [Validators.required]],
    });
  }
}
