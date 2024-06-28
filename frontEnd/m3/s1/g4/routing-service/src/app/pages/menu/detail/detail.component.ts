import { PizzeService } from './../../../pizze.service';
import { Component } from '@angular/core';
import { iPizza } from '../../../Models/i-pizza';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  currentPizza!:iPizza

  constructor(
    private route:ActivatedRoute,//contiene metodi ed informazioni per gestire la rotta in cui mi trovo
    private PizzeSvc:PizzeService
  ){}

  ngOnInit(){

    this.route.params.subscribe((params:any) => {//ottengo i parametri dalla rotta

        console.log(params);

        let pizzaTrovata = this.PizzeSvc.getById(params.id)//cerco la pizza il cui id è uguale all'id trovato nella rotta

        console.log(pizzaTrovata);


        if(pizzaTrovata){//controllo che la pizza esista
          this.currentPizza = pizzaTrovata//visto che esiste salvo il dato nella proprietà, in questo modo poterò mostrare il dettaglio della pizza nell'html
        }
    })

  }

}
