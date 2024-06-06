import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import { iUser } from './Models/iuser';
import { TodoService } from './services/todo.service';
import { iTodo } from './Models/itodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  todos:iTodo[] = []

  query:string = ''

  constructor(
    private userSvc:UserService,
    private todoSvc:TodoService,
  ){}


  ngOnInit(){

    const users = this.userSvc.getAll()
    this.todos = this.todoSvc.getTodoWithAuthor(users)

  }

  search(){
    const users = this.userSvc.getAll()
    const todos = this.todoSvc.getTodoWithAuthor(users)
    this.todos = this.query ? this.todoSvc.filterByAuthorName(this.query, this.todos) : todos
  }


}
