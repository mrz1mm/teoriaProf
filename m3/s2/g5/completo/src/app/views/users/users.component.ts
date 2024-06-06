import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: User[]
  constructor(private todoSrv: TodoService) { }

  ngOnInit(): void {
    this.users = this.todoSrv.mapByUser()
  }
}
