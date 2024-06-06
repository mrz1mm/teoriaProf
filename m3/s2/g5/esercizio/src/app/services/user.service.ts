import { Injectable } from '@angular/core';
import { users } from '../../assets/users';
import { iUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:iUser[] = users

  constructor() { }

  getAll(){
    return this.users
  }
}
