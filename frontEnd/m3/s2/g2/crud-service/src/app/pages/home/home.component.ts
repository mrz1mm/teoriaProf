import { Component } from '@angular/core';
import { PizzaService } from '../../pizza.service';
import { iPizza } from '../../Models/ipizza';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  creaPizza:boolean = false

  newPizza:Partial<iPizza> = {
    disponibile: true
  }

  pizzeArr:iPizza[] = []

  constructor(
    private pizzaSvc:PizzaService,
  ){}

  ngOnInit(){
    this.pizzeArr = this.pizzaSvc.pizze
  }

  delete(id:number){

    this.pizzaSvc.delete(id)

  }

  create(){
    this.pizzaSvc.create(this.newPizza)
  }

}
