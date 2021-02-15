import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import { LoaderComponent } from './components/loader/loader.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import {FilterPipe} from './pipes/filter.pipe';



@NgModule({
  declarations: [UserListComponent, LoaderComponent, PostCardComponent, FilterPipe],
  exports: [
    UserListComponent,
    LoaderComponent,
    PostCardComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ]
})
export class SharedModule { }
