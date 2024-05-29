import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrl: './projection.component.scss'
})
export class ProjectionComponent {

  @ContentChild('paragrafoProiettato') contenutoProiettato!:ElementRef
  //content child permette di ricercare una local variable all'interno di contenuti proiettati
  //gli elementi trovati in questo modo sono sempre di tipo ElementRef



  ngAfterViewInit(){

    const elemento = this.contenutoProiettato.nativeElement;
    //per arrivare all'elemento del dom devo accedere alla prop nativeElement
    //il formato di un elementRef è sempre così

    console.log('Testo del contenuto proiettato',elemento.innerText);


  }

}
