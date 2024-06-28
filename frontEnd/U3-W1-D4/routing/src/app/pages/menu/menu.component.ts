import { Component } from '@angular/core';
import { iPizza } from '../../Models/i-pizza';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  pizzeArr:iPizza[] = [
    {
      id:1,
      gusto:'Margherita',
      prezzo:5
    },
    {
      id:2,
      gusto:'Diavola',
      prezzo:1
    },
    {
      id:3,
      gusto:'Capricciosa',
      prezzo:7
    }
  ]



}
