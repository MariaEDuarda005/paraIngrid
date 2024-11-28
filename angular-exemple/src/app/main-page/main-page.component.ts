import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'main-page',
  imports: [LoginFormComponent, RegisterFormComponent],
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  showLogin: boolean = true;

  showAlert() {
    Swal.fire({
      title: 'Login Efetuado!',
      text: 'ogin registrado',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }
}
