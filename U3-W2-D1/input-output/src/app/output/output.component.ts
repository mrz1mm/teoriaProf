import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {

  @Output() onDatoInviato:EventEmitter<string> = new EventEmitter()

  inviaDato(){

    this.onDatoInviato.emit('ciao')

  }

}
