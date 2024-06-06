import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPizzaComponent } from './pages/add-pizza/add-pizza.component';
import { EditPizzaComponent } from './pages/edit-pizza/edit-pizza.component';
import { ListPizzaComponent } from './pages/list-pizza/list-pizza.component';
import { NavbarComponent } from './main-components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddPizzaComponent,
    EditPizzaComponent,
    ListPizzaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
