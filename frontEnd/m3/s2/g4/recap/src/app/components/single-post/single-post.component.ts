import { Component, Input } from '@angular/core';
import { iPost } from '../../Models/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {

  @Input() post!:iPost

  toggleStatus(){
    //Metodo utilizzato Se c'è il bottone attivo
    this.post.active = !this.post.active
  }

}
