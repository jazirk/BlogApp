import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {User} from '../../models/user.model';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  dataSource;
  users: User[] = [];
  isLoading = false;
  displayedColumns: string[] = ['Name', 'Company'];
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource(this.users);
      this.isLoading = false;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    let filteredUsers: User[] = [];
    filteredUsers = this.users.filter((data: any) => {
        return data.name.toLowerCase().includes(filterValue.trim().toLowerCase()) ||
          data.company.name.toLowerCase().includes(filterValue.trim().toLowerCase());
      });
    this.dataSource = new MatTableDataSource(filteredUsers);
  }

  getPostDetails(userId) {
    this.router.navigate(['posts', userId]);
  }

}
