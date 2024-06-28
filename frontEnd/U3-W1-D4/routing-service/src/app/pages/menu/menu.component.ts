import { Component } from '@angular/core';
import { iPizza } from '../../Models/i-pizza';
import { PizzeService } from '../../pizze.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  pizzeArr:iPizza[] = []

  constructor(
    private pizzeSvc:PizzeService
  ){}

  ngOnInit(){

    this.pizzeArr = this.pizzeSvc.getAll()

  }


}
