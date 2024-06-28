import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'componenti';

  @ViewChild('titolo') elementoCercato!:ElementRef
   //Viewchild permette di ricercare una local variable all'interno dell'html del componente
  //gli elementi trovati in questo modo sono sempre di tipo ElementRef

  ngAfterViewInit(){
    //uso ngAfterViewsInit per essere sicuro che il tag sia già disponibile prima di poterlo manipolare
    console.log(this.elementoCercato.nativeElement);
    console.log(this.elementoCercato.nativeElement.innerText);

    this.elementoCercato.nativeElement.style.color = 'red';

  }

}
