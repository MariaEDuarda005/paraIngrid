import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'register-form',
  imports: [ ReactiveFormsModule ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  _fb = inject(FormBuilder) // injetar as dependencias

  register = this._fb.group({
    senha: ["", Validators.required],
    edv: ["", Validators.required]
  })

  submitForm() {
    if (this.register.valid) {
      alert('Formulário enviado com sucesso');
    } else {
      alert('Por favor, preencha todos os campos');
    }
  }
}
