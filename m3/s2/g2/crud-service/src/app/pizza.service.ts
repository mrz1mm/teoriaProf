import { Injectable } from '@angular/core';
import { iPizza } from './Models/ipizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  pizze:iPizza[] =  [
    {
      id:1,
      gusto:'Margherita',
      prezzo:5,
      disponibile:false,
    },
    {
      id:2,
      gusto:'Diavola',
      prezzo:1,
      disponibile:true
    },
    {
      id:3,
      gusto:'Capricciosa',
      prezzo:7,
      disponibile:false
    }
  ]

  constructor() {

    this.getAll()

  }

  getAll(){
    //fetch delle pizze
  }

  getPizzaById(id:number):iPizza | undefined{
    return this.pizze.find(p => p.id == id)
  }

  create(newPizza:Partial<iPizza>){

    //normalmente l'id viene generato dal BE in questa fase, quindi generiamo un id momentaneo solo per simulare l'operato del back end
    //QUESTA COSA NON VA FATTA QUANDO TRATTIAMO UN BE REALE E SERVE SOLO AI FINI DEL FUNZIONAMENTO DI QUESTO SINGOLO ESERCIZIO
    let idRand = Math.floor(Math.random() * 500);

    newPizza.id = idRand;//ASSEGNO L'ID RANDOMICO

    const tempPizza =  <iPizza> newPizza//uso l'assertion type per spiegare a ts che in realtà è un oggetto di tipo pizza

    this.pizze.push(tempPizza)

  }

  delete(id:number){
    let indice = this.pizze.findIndex(p => p.id == id)//trovo l'indice della pizza
    this.pizze.splice(indice,1)//a partire dall'indice trovato elimina la pizza
  }

  delete2(id:number){
    this.pizze = this.pizze.filter(p => p.id != id)//restituisce tutte le pizze tranne quella da eliminare
  }





}
