import { Component, OnInit } from '@angular/core';
import { SupplementsService } from '../supplements.service';

import { User } from '../model/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUser: {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private supplement: SupplementsService
  ) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.supplement.getUser(id).subscribe((res) => {});
    this.populateData();
  }

  ngOnInit(): void {}

  // Get all users, delete one user and get all users
  // readUser() {
  //   this.supplement.getUsers().subscribe((data) => {
  //     this.User = data;
  //   });
  // }

  // removeUser(user, index) {
  //   this.supplement.deleteUser(user._id).subscribe((data) => {
  //     this.User.splice(index, 1);
  //   });
  //   this.readUser();
  // }

  populateData() {
    this.currentUser = this.supplement.currentUser;
    console.log(this.currentUser);
  }
}
