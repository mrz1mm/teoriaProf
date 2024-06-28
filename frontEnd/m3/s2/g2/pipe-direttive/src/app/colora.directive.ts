import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColora]'
})
export class ColoraDirective {

  constructor(private ref:ElementRef) { }//accedo all'elemento su cui la direttiva è applicata

  @Input() colore:string = 'red'//posso creare proprietà aggiuntive che mi permettano di inserire valori e personalizzare l'output della direttiva

  ngOnInit(){

    console.log(this.ref.nativeElement);//il console log mostrerà l'elemento del dom sui cui la direttiva è agganciata

    this.ref.nativeElement.style.color = this.colore//l'elemento selezionato si colorerà in base al colore inserito dall'utente o in base a quello impostato come predefinito (red)


  }


  ///ecco come gestire eventi di js con le direttive

  @HostListener('click') onClick(){
    this.ref.nativeElement.style.color = 'blue'
  }

  //in base allo scorrimento della finestra
  @HostListener('window:scroll') onScroll(){
    //leggo la distanza dall'alto degli elementi su cui è applicata la direttiva
    console.log(this.ref.nativeElement.getBoundingClientRect().top);
  }
}
