import { Component } from '@angular/core';

@Component({
  selector: 'app-direttive',
  templateUrl: './direttive.component.html',
  styleUrl: './direttive.component.scss'
})
export class DirettiveComponent {

  bgColor:string = 'yellow';
  color:string = 'red';

  success:boolean = false

  toggleStatus():void{
    this.success = !this.success
  }

}
