import { Component } from '@angular/core';
import { iPizza } from '../../Models/ipizza';
import { PizzaService } from '../../pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  pizzeArr:iPizza[] = []


  constructor(
    private pizzaSvc:PizzaService
  ){}


  ngOnInit(){

    this.pizzeArr = this.pizzaSvc.pizze

  }

}
