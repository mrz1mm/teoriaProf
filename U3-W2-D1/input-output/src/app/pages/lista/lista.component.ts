import { Component } from '@angular/core';
import { iPizza } from '../../Models/ipizza';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
    pizzeArr:iPizza[] = [
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


    cambiaStatus(pizza:iPizza){
      pizza.disponibile = !pizza.disponibile
    }


}
