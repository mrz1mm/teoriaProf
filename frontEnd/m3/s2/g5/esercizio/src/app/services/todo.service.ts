import { iUser } from './../Models/iuser';
import { Injectable } from '@angular/core';
import { iTodo } from '../Models/itodo';
import { todos } from '../../assets/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos:iTodo[] = todos

  constructor() { }

  getAll(){
    return this.todos
  }

  getTodoWithAuthor(users:iUser[]){
     return this.todos.map(t => {
        let author = users.find(u => u.id == t.userId ) ;

        t.author = author;

        return t;//restituisco il post modificato
      })
  }

  filterByAuthorName(firstName:string, todos:iTodo[]){
    return todos.filter(t => t.author?.firstName.toLowerCase().includes(firstName.toLowerCase()))
  }

}


