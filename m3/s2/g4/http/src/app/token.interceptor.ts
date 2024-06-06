import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log(request);

    //Metto un clone della request all'interno di newRequest.
    //Il clone mi serve, siccome la request è immutabile.
    let newRequest = request.clone({//Procedo ad aggiungere alla nuova request gli headers del caso
      headers:request.headers.append('Token','kujsdgfjabndfiewriuygh')//Partendo dagli della request iniziale, uso append per raggiungere eventuali headers
    })

    return next.handle(newRequest);//A questo punto Handle deve gestire la nuova request e non più quella iniziale.
  }
}
