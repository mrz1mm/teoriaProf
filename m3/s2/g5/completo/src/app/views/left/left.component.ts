import { Component, OnChanges, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  todos!: Todo[]
  constructor(private todoSrv: TodoService) { }
  ngOnInit(): void {
    this.todos = this.todoSrv.notCompleted

  }


}
