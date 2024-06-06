import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { InputOutputComponent } from './pages/input-output/input-output.component';
import { ListaComponent } from './pages/lista/lista.component';
import { ElementoListaComponent } from './pages/elemento-lista/elemento-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    InputOutputComponent,
    ListaComponent,
    ElementoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
