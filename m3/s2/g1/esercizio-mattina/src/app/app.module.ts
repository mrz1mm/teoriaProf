import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePizzaComponent } from './single-pizza/single-pizza.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglePizzaComponent,
    HomeComponent,
    Pagina2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
