import { Component } from '@angular/core';
import { PostService } from '../../post.service';
import { iPost } from '../../Models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  filteredPost: iPost[] = []
  allTags: string[] = []

  constructor(private postSvc:PostService){}


  ngOnInit(){

    this.filteredPost = this.postSvc.posts

    this.allTags = this.postSvc.getUniqueTags()

  }

  filterByTag(event:any,tag:string){
    console.log(event);

    event.target.classList.add('activeFilter')

    this.filteredPost = this.postSvc.getPostsByTag(tag)
  }

  resetFilters(){
    this.filteredPost = this.postSvc.posts
  }

}
