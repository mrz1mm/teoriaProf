import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iPizza } from '../../Models/ipizza';

@Component({
  selector: 'app-elemento-lista',
  templateUrl: './elemento-lista.component.html',
  styleUrl: './elemento-lista.component.scss'
})
export class ElementoListaComponent {

  @Input() pizza!:iPizza

  @Output() onSelectPizza = new EventEmitter<iPizza>()



  inviaPizza(pizza:iPizza){

    this.onSelectPizza.emit(pizza)

  }

}
