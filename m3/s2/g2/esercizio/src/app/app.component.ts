import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    private postSvc:PostService
  ){}

  ngOnInit(){

   console.log( this.postSvc.getUniqueTags() )

  }

}
