import { Component } from '@angular/core';
import { iPizza } from '../../Modules/ipizza';
import { PizzaService } from '../../pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrl: './add-pizza.component.scss'
})
export class AddPizzaComponent {


  newPizza:Partial<iPizza> = {
    disponibile:true
  }

  constructor(
    private pizzaSvc:PizzaService,
    private router:Router//posso usarlo per fare redirect
  ){}


  create(){

    this.pizzaSvc.create(this.newPizza).subscribe(()=>{
      this.newPizza = {disponibile:true}//svuoto il form (è una specie di reset)
      //this.router.navigate(['/'])//Reindirizzo l'utente alla home
    })
  }

}
