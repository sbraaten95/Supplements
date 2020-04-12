import { Component, OnInit } from '@angular/core';
import { SupplementsService } from './supplements.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Supplements';
  currentUser = {};
  profileUrl = `profile/${localStorage.getItem('access_token')}`;
  _this = this;

  constructor(public supplement: SupplementsService) {
    this.getCurrentUser();
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  logout() {
    this.supplement.logout();
  }

  loggedIn() {
    return this.supplement.isLoggedIn();
  }

  getCurrentUser() {
    this.supplement.getCurrentUser(this._this, (_this, data) => {
      _this.currentUser = data;
      _this.profileUrl += data.email;
    });
    console.log(this.currentUser);
  }
}
