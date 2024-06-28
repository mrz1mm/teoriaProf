import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const routes: Route[] = [
  {
    path: 'active',
    loadChildren: () => import('./active-posts/active-posts.module').then(m => m.ActivePostsModule)
  },
  {
    path: 'inactive',
    loadChildren: () => import('./inactive-posts/inactive-posts.module').then(m => m.InactivePostsModule)
  },
  {
    path: "post/:id",
    loadChildren: () => import('./post-detail/posts-detail.module').then(m => m.PostsDetailModule)
  },
  {
    path: '',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
