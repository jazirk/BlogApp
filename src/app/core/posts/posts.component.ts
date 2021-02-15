import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts;
  isLoading = false;
  filteredPost = [];
  filteredWord;
  userId;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.userId = param['userId'];
    });

    this.getPosts();
  }

  getPosts() {
    this.isLoading = true;
    this.apiService.getPosts(this.userId).subscribe(posts => {
      this.posts = posts;
      this.filteredPost = posts;
      this.isLoading = false;
    });
  }

  search(event: Event) {
      this.posts = this.filteredPost.filter(item => item.title.includes(this.filteredWord));
  }

  postDetails(post) {
    this.router.navigate(['posts', post.id, 'comments']
    );
  }
}
