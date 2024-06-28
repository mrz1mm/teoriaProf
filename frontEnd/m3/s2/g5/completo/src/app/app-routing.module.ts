import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { DoneComponent } from './views/done/done.component';
import { LeftComponent } from './views/left/left.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'done',
    component: DoneComponent,
  },
  {
    path: 'todo',
    component: LeftComponent,
  },
  {
    path: "users",
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
