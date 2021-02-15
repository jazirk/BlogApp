import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './core/users/users.component';
import {PostsComponent} from './core/posts/posts.component';
import {PostDetailsComponent} from './core/post-details/post-details.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'users', pathMatch: 'full'
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'posts/:userId', component: PostsComponent
  },
  {
    path: 'posts/:postId/comments', component: PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
