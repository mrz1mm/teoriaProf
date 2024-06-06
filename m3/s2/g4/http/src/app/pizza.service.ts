import { Injectable } from '@angular/core';
import { iPizza } from './Modules/ipizza';
import { Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  apiUrl:string = 'http://localhost:3000/pizze';

  cartSubject = new Subject<iPizza>();//punto di ingresso dei dati
  cart$ = this.cartSubject.asObservable()//punto di uscita

  constructor(private http:HttpClient) { }//ricorda di inserire la proprietà http nel constructor per poter effettuare le chiamate

  //una tipizzazione corretta del risultato permette di avere errori che ci avvisano che stiamo sbagliando il return
  getAll():Observable<iPizza[]>{
    //return è necessario per permettere ai componenti di fare subscribe
    return this.http.get<iPizza[]>(this.apiUrl).pipe(catchError(error => {
      return throwError(() => new Error('Errore nella richiesta get'))
    }))
  }

  getById(id:number):Observable<iPizza>{
    return this.http.get<iPizza>(`${this.apiUrl}/${id}`);
  }


  create(newPizza:Partial<iPizza>):Observable<iPizza>{
    return this.http.post<iPizza>(this.apiUrl, newPizza)
  }

  edit(pizza:iPizza):Observable<iPizza>{
    return this.http.put<iPizza>(`${this.apiUrl}/${pizza.id}`, pizza)
  }

  delete(id:number):Observable<iPizza>{
    return this.http.delete<iPizza>(`${this.apiUrl}/${id}`)
  }

  addToCart(pizza:iPizza){
      this.cartSubject.next(pizza)
  }

}
