import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPizzaComponent } from './pages/list-pizza/list-pizza.component';
import { AddPizzaComponent } from './pages/add-pizza/add-pizza.component';
import { EditPizzaComponent } from './pages/edit-pizza/edit-pizza.component';

const routes: Routes = [
  {
    path:'',
    component: ListPizzaComponent
  },
  {
    path:'add-pizza',
    component: AddPizzaComponent
  },
  {
    path:'edit-pizza/:id',
    component: EditPizzaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
