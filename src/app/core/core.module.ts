import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from './posts/posts.component';
import {UsersComponent} from './users/users.component';
import {SharedModule} from '../shared/shared.module';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { PostDetailsComponent } from './post-details/post-details.component';



@NgModule({
  declarations: [PostsComponent, UsersComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class CoreModule { }
