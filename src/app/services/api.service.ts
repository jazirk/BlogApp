import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {User} from '../models/user.model';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  getPosts(userId) {
    return this.http.get<any>(`posts` , {
      params  : new HttpParams().set('userId', userId)
    }).pipe(catchError(this.handleError));
  }

  getUsers() {
    return this.http.get<User[]>('users').pipe(catchError(this.handleError));
  }

  getPostDetails(postId) {
    return this.http.get(`posts/${postId}`).pipe(catchError(this.handleError));
  }

  getComments(postId) {
    return this.http.get(`posts/${postId}/comments`).pipe(catchError(this.handleError));
  }

  deletePost(postId) {
    return this.http.delete(`posts/${postId}`).pipe(catchError(this.handleError));
  }

  handleError(errorRes: HttpErrorResponse) {
    const errorMessage = "An unknown error occured";
    this.showDialog(errorMessage);
    return throwError(errorMessage);
  }

  showDialog(message) {
    this.snackBar.open(message, 'End now', {
      duration: 500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
