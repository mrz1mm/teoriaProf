import { Injectable } from '@angular/core';
import { iPost } from './Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postArray:iPost[] = [
      {
        title: 'Post 1',
        body: 'Testo del primo post',
        active:true
      },
      {
        title: 'Post 2',
        body: 'Testo del secondo post',
        active:false
      }
  ]

  constructor() { }




}
