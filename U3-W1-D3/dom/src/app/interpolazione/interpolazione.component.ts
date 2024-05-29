import { Component } from '@angular/core';
import { iPizza } from '../Models/pizza';

@Component({
  selector: 'app-interpolazione',
  templateUrl: './interpolazione.component.html',
  styleUrl: './interpolazione.component.scss'
})
export class InterpolazioneComponent {

  titolo:string = 'Titolo del componente';

  pizza:iPizza = {
    gusto: 'Margherita',
    prezzo: 5
  }


  restituisciSaluto():string{
    return 'Ciao!';
  }


}
