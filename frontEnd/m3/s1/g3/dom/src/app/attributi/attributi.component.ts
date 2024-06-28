import { Component } from '@angular/core';

@Component({
  selector: 'app-attributi',
  templateUrl: './attributi.component.html',
  styleUrl: './attributi.component.scss'
})
export class AttributiComponent {

  stringHTML:string = '<p>Contenuto con <abbr>HTML</abbr></p>';

  bg:string = 'red';

  urlImmagine:string = 'https://picsum.photos/200/300';

  //questo metodo si avvia da solo all'avvio del componente
  ngOnInit(){

    setTimeout(()=>{
      this.bg = 'green';//dopo 3 secondi cambio il colore, questo si rifletterà sull'html
    }, 3000)

  }

}
