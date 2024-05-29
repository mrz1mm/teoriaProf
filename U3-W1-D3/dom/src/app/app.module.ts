import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolazioneComponent } from './interpolazione/interpolazione.component';
import { AttributiComponent } from './attributi/attributi.component';
import { DirettiveComponent } from './direttive/direttive.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolazioneComponent,
    AttributiComponent,
    DirettiveComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
