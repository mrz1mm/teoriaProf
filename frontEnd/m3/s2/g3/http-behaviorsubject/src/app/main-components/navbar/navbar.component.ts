import { Component } from '@angular/core';
import { PizzaService } from '../../pizza.service';
import { iPizza } from '../../Modules/ipizza';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  carrelloPizze:iPizza[] = []

  constructor(private pizzaSvc:PizzaService){}


  ngOnInit(){

    this.pizzaSvc.cart$.subscribe(pizze => {
      this.carrelloPizze = pizze
    })

  }

  removeFromCart(pizza:iPizza){
    this.pizzaSvc.removeFromCart(pizza)
  }

}
