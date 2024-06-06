import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, throwError } from 'rxjs';
import { iPhoto } from './Models/iphoto';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiUrl:string = 'https://jsonplaceholder.typicode.com/photos';

  likesCount:number = 0;

  likesSubject = new Subject<number>();//Punto d'ingresso
  likes$ = this.likesSubject.asObservable()//Punto di uscita

  constructor(
    private http:HttpClient
  ) { }


  getAll(){
    return this.http.get<iPhoto[]>(this.apiUrl)
    .pipe(catchError(error => throwError(()=> new Error(this.mappaturaErrori(error)))))
  }


  delete(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`)
    .pipe(catchError(error => throwError(()=>  new Error(this.mappaturaErrori(error)))))
  }


  addLike(){
    this.likesCount++
    this.likesSubject.next(this.likesCount)
  }

  mappaturaErrori(statusCode:number){
    let errore = ''
    switch(statusCode){
      case 404:
        errore = 'Risorsa non trovata';
        break;
      case 500:
        errore =  'Qualcosa è andato storto'
        break;
    }
    return errore;
  }

}
