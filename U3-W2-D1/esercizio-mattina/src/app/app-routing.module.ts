import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'pag2',
    component:Pagina2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
