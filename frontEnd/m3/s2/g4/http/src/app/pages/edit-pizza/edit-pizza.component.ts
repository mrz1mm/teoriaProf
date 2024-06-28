import { PizzaService } from './../../pizza.service';
import { Component } from '@angular/core';
import { iPizza } from '../../Modules/ipizza';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrl: './edit-pizza.component.scss'
})
export class EditPizzaComponent {

  pizza!:iPizza;

  constructor(
    private pizzaSvc:PizzaService,//Accedo al service che gestisce le pizze
    private router:Router,//Mi permette di fare dei redirect
    private route:ActivatedRoute//Contiene le informazioni sulla rotta attuale
  ){}

  ngOnInit(){

    this.route.params.subscribe((params:any) => {

      this.pizzaSvc.getById(params.id).subscribe(pizza => {
        this.pizza = pizza
      })

    })

  }

  edit(){

    this.pizzaSvc.edit(this.pizza).subscribe(() => {

      this.router.navigate(['/'])

    })

  }

}
