import { Component } from '@angular/core';
import { iPizza } from '../Models/pizza';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss'
})
export class NgForComponent {

  pizzeArr:iPizza[] = [
    {
      gusto:'Margherita',
      prezzo:5
    },
    {
      gusto:'Diavola',
      prezzo:1
    },{
      gusto:'Capricciosa',
      prezzo:7
    }
  ]

  ngOnInit(){

    setTimeout(()=>{

      this.pizzeArr.push({
        gusto:'Fiocco',
        prezzo:10
      })

    },5000)

  }

}
