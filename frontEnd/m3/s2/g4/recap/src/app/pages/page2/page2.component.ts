import { Component } from '@angular/core';
import { iPost } from '../../Models/post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {

  posts:iPost[] = []

  constructor(private postSvc:PostService){}

  ngOnInit(){
    this.posts = this.postSvc.postArray
  }

}
