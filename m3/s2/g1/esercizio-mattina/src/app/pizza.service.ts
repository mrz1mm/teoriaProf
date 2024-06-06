import { Injectable } from '@angular/core';
import { iPizza } from './Models/ipizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  pizze:iPizza[] =  [
    {
      gusto:'Margherita',
      prezzo:5,
      disponibile:false,
    },
    {
      gusto:'Diavola',
      prezzo:1,
      disponibile:true
    },
    {
      gusto:'Capricciosa',
      prezzo:7,
      disponibile:false
    }
  ]

  constructor() { }
}
