import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';

import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Supplements';
  currentUser = new User();
  profileUrl = `profile/${localStorage.getItem('access_token')}`;
  _this = this;

  constructor(public userService: UserService) {}

  ngOnInit() {}

  logout() {
    this.userService.logout();
  }

  loggedIn() {
    return this.userService.isLoggedIn();
  }

  getCurrentUser() {
    console.log(this.userService.currentUser);
    this.currentUser = this.userService.currentUser;
  }
}
