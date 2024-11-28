import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  imports: [ ReactiveFormsModule ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  constructor(
    private router: Router
  ){}

  _fb = inject(FormBuilder) // injetar as dependencias

  login = this._fb.group({
    nome: ["", Validators.required],
    senha: ["", Validators.required],
  })

  submitAndRedirect() {
    if (this.login.valid) {
      alert('Formulário enviado com sucesso');
      this.router.navigate(['/register'])
    } else {
      alert('Por favor, preencha todos os campos');
    }
  }
}
