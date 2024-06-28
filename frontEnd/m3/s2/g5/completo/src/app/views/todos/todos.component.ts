import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnChanges {
  todos!: Todo[]
  @Input() query!: string


  constructor(private todoSrv: TodoService) { }



  ngOnChanges(changes: SimpleChanges): void {
    this.todos = this.todoSrv.filterByQuery(this.query?.toLowerCase() || "")

  }


}
