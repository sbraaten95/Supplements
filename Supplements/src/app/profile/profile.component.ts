import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

import { User } from '../model/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUser: User;
  userName = '';
  userEmail = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe((res) => {
      this.currentUser = res;
      this.userName = this.currentUser.name;
      this.userEmail = this.currentUser.email;
    });
  }

  ngOnInit(): void {}

  // Get all users, delete one user and get all users
  // readUser() {
  //   this.userService.getUsers().subscribe((data) => {
  //     this.User = data;
  //   });
  // }

  // removeUser(user, index) {
  //   this.userService.deleteUser(user._id).subscribe((data) => {
  //     this.User.splice(index, 1);
  //   });
  //   this.readUser();
  // }
}
