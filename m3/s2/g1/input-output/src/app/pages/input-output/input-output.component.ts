import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss'
})
export class InputOutputComponent {

  pizza:{gusto:string, prezzo:number} = {
    gusto: 'Margherita',
    prezzo: 5
  }

  stringArr:string[] = []

  gestisciDato(dato:string){
    this.stringArr.push(dato)
  }

}
