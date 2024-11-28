import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginFormComponent } from "../login-form/login-form.component";

@Component({
  selector: 'register-form',
  imports: [ReactiveFormsModule, LoginFormComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  private form = inject(FormBuilder);

  registerForm: FormGroup = this.form.group({
    senha: ['', Validators.required],
    edv: ['', Validators.required],
  });

  submitForm() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      alert(`Dados enviados: ${JSON.stringify(formData)}`);
    } else {
      alert('Por favor, preencha todos os campos');
    }
  }
}


