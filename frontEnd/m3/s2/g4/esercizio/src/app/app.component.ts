import { Component } from '@angular/core';
import { iPhoto } from './Models/iphoto';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  photos:iPhoto[] = []

  likesCount:number = 0;

  constructor(private photoSvc:PhotoService){}

  ngOnInit(){

    this.photoSvc.getAll().subscribe(photos => {

      this.photos = photos

    })

    this.photoSvc.likes$.subscribe(likesCount => {
      this.likesCount = likesCount
    })

  }

  like(){
    this.photoSvc.addLike()
  }

  delete(id:number){
    this.photoSvc.delete(id).subscribe(()=>{

      //qui dare conferma dell'eliminazione oppure eliminare la foto
      //In questo caso eliminiamo la foto

      this.photos = this.photos.filter(p => p.id != id)

    })
  }

}
