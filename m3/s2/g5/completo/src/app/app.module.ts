import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { TodosComponent } from './views/todos/todos.component';
import { IdfyPipe } from './pipes/idfy.pipe';
import { FullNamePipe } from './pipes/full-name.pipe';
import { FormsModule } from '@angular/forms';
import { DoneComponent } from './views/done/done.component';
import { SingleTodoComponent } from './components/single-todo/single-todo.component';
import { LeftComponent } from './views/left/left.component';
import { UsersComponent } from './views/users/users.component';
import { SingleUserComponent } from './components/single-user/single-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TodosComponent,
    IdfyPipe,
    FullNamePipe,
    DoneComponent,
    SingleTodoComponent,
    LeftComponent,
    UsersComponent,
    SingleUserComponent,
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
