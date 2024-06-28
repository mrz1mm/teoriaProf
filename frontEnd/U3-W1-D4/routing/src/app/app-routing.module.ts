import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { Page404Component } from './pages/page404/page404.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DetailComponent } from './pages/menu/detail/detail.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',//redireziona l'utente
    pathMatch: 'full'//per far si che il path vuoto venga riconosciuto correttamente
  },
  {
    path:'home',
    component: HomeComponent,
    title:'Home'
  },
  {
    path:'chi-siamo',
    component: ChiSiamoComponent,
    title:'Chi Siamo'
  },
  {
    path:'pizze',
    component: MenuComponent
  },
  {
    path:'pizze/:id',
    component: DetailComponent
  },
  {
    //questo path va messo alla fine della lista delle rotte
    path:'**',//pagina 404
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
