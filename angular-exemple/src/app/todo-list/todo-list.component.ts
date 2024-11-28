import { Component } from '@angular/core';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'todo-list', // como vou chamar o componente
  imports: [ AddItemComponent ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  title: string = "Aula de angular"
  placeholder: string = "Digite algo para fazer"
  items: string[] = []

  addItem(ev: string){
    this.items.push(ev);
  }
}
