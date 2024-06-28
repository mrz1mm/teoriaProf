import { Injectable } from '@angular/core';
import { iPizza } from './Models/i-pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzeService {

  pizzeArr:iPizza[] = [
    {
      id:1,
      gusto:'Margherita',
      prezzo:5
    },
    {
      id:2,
      gusto:'Diavola',
      prezzo:1
    },
    {
      id:3,
      gusto:'Capricciosa',
      prezzo:7
    }
  ]

  constructor() {

    this.getFromJson()

  }

  getFromJson(){
    fetch('url').then(res => res.json())
    .then(res => {
      this.pizzeArr = res
    })
  }

  getAll():iPizza[]{
    return this.pizzeArr
  }

  getById(id:number){
    return this.pizzeArr.find(p => p.id == id)
  }


}
