import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from "./register-form/register-form.component";

@Component({
  selector: 'app-root',
  imports: [TodoListComponent, LoginFormComponent, RegisterFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-exemple';
}
