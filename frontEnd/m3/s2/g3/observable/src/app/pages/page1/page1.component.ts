import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component implements OnInit, OnDestroy {

  sub!:Subscription

  ngOnInit(){

    const obs = new Observable<number>(observer => {

      let count = 0;

      setInterval(()=>{
        if(count > 300){
          observer.error('Errore, numero troppo grande')//error lancia l'errore e termina l'esecuzione
        }

        observer.next(count)//invio un aggiornamento, un nuovo dato attraversa lo stream di dati


        //observer.complete()

        count++
      },1000)

    })


    //ora faccio subscribe

    this.sub = obs
    .pipe(//pipe può essere collegato ad ogni observable per manipolare i dati prima che arrivino al subscribe
      filter(n => n > 2),//faccio passare solo i numeri superiori a 2
      map(n => 'Numero ricevuto: ' + n)//i numeri che riescono a passare vengono concatenati ad una stringa
    )
    .subscribe({
      next:dato =>  console.log(dato),//gestisco i dati trasmessi con metodo next
      complete: () => {
        //fare qualcosa in caso di completamento
      },//qualora nell'observable ci fosse il metodo .complete() gestisco i dati trasmessi da quest'ultimo
      error: error => console.error(error)//qualora nell'observable ci fosse il metodo .error() gestisco i dati trasmessi da quest'ultimo
    })


    //questa è il formato d'utilizzo più comune
    //obs.subscribe(dato =>  {console.log(dato)})//se c'è solo il metodo next mi basta usare una singola callback
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

}
