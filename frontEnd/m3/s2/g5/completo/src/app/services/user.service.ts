import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { users } from 'src/assets/users';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = users

  constructor() {

  }

  get all() {
    return this.users
  }

  getById(id: number) {
    return this.users.find(user => user.id === id)
  }
}
