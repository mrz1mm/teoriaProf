import { Component } from '@angular/core';
import { PizzaService } from '../../pizza.service';
import { iPizza } from '../../Modules/ipizza';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrl: './list-pizza.component.scss'
})
export class ListPizzaComponent {

  pizze:iPizza[] = []

  constructor(private pizzaSvc:PizzaService){}


  ngOnInit(){
    this.pizzaSvc.getAll().subscribe(pizze => {
      this.pizze = pizze
    })
  }

  delete(id:number){
    this.pizzaSvc.delete(id).subscribe(()=>{

      this.pizze = this.pizze.filter(p => p.id != id)//dopo che il server ha eliminato la pizza, se non scompare devo procedere ad eliminarla manualmente dall'array, così che l'utente veda la schermata aggiornarsi

      console.log('pizza eliminata')
      //qui inserisco operazioni di notifica all'utente per fargli capire che l'operazione è andata a buon fine
    })
  }

  addToCart(pizza:iPizza){
    this.pizzaSvc.addToCart(pizza)
  }
}
