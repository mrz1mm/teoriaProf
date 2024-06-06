import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss']
})
export class SingleTodoComponent {
  @Input() todo!: Todo
  constructor(private todoSrv: TodoService) {}
  toggleTask(id: number) {
    this.todoSrv.toggleCompletion(id)
  }
}
