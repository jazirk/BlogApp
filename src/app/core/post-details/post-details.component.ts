import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';



@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post;
  postId;
  displayComments = false;
  comments = [];
  isLoading = false;


  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router, private location: Location) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.postId = params.postId;
      this.getPostDetails();
    });
  }

  getPostDetails() {
    this.apiService.getPostDetails(this.postId).subscribe(postDetails => {
      this.post = postDetails;
    });
  }

  loadComments() {
    this.isLoading = true;
    this.displayComments = !this.displayComments;
    this.apiService.getComments(this.postId).subscribe((comments: any) => {
      this.comments = comments;
      this.isLoading = false;
    }, error => this.isLoading = false);
  }

  deletePost() {
    this.isLoading = true;
    this.apiService.deletePost(this.postId).subscribe(res => {
      this.isLoading = false;
      this.apiService.showDialog('Succesfully deleted');
      this.location.back();
    }, error => this.isLoading = false);
  }
}
