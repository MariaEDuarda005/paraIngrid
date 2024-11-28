import { Component } from '@angular/core';
import { AddItemComponent } from '../add-item/add-item.component';
import { Languages, TranslatePipe } from '../translate.pipe';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'todo-list', // como vou chamar o componente
  imports: [ AddItemComponent, TranslatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

// TitleCasePipe - primeira letra de cada palavra fica maiuscula

export class TodoListComponent {
  items: string[] = []
  lang: Languages = 'en';

  addItem(ev: string){
    this.items.push(ev);
  }

  alterarLang(){
    if(this.lang === 'en'){
      this.lang = 'pt'
    }
    else{
      this.lang = 'en'
    }
  }
}
