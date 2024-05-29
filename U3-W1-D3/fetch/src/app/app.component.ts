import { Component } from '@angular/core';
import { iUser } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  apiUrl:string = 'https://jsonplaceholder.typicode.com/users';

  userArr:iUser[] = []

  ngOnInit(){

    this.getUsers()

    //commento questo perché il metodo async getUsers fa la stessa cosa
    // fetch(this.apiUrl)
    // .then(res => <Promise<iUser[]>> res.json())
    // .then(users => {
    //   this.userArr = users;
    // })

  }

  async getUsers():Promise<void>{

    let response = await fetch(this.apiUrl)
    let users = <iUser[]> await response.json()
    //uso <iUser[]> per spiegare a ts che mi aspetto oggetti iUser

    setTimeout(()=>{
      this.userArr = users;
    }, 5000)

  }

}
