import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { todos } from 'src/assets/todo';
import { UserService } from './user.service';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = todos
  constructor(private userSrv: UserService) {
    this.populate()
  }

  get all(): Todo[] {
    return this.todos
  }
  get completed(): Todo[] {
    return this.todos.filter(todo => todo.completed)
  }
  get notCompleted(): Todo[] {
    return this.todos.filter(todo => !todo.completed)
  }
  filterByQuery(query: string) {

    return this.todos.filter(todo => {
      console.log(todo.user);

      return todo.user?.firstName.toLowerCase().includes(query) || todo.user?.lastName.toLowerCase().includes(query)
    })
  }
  populate() {
    this.todos.forEach(todo => {
      todo.user = this.userSrv.getById(todo.userId)
    })
  }
  toggleCompletion(id: number) {
    const found = this.todos.find(todo => todo.id === id)
    if (found) {
      //se .find non trova nulla ritornera' undefined, altrimenti un oggetto di tipo Todo
      found.completed = !found.completed
    } else alert("404 :(")
  }
  mapByUser(): User[] {
    return this.userSrv.all.map(user => {
      user.todos = this.all.filter(todo => todo.userId === user.id)
      return user
    })
  }
}
