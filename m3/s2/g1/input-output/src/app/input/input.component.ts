import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  //il decoratore input fa sì che la proprietà pizzaInput venga valorizzata da un componente genitore
  @Input() pizzaInput!:{gusto:string, prezzo:number};

  //in pratica con input creo un attributo personalizzato per l'html sel componente




}
