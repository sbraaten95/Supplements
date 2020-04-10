import { Component, OnInit } from '@angular/core';
import { SupplementsService } from '../supplements.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  User: any = [];

  constructor(private supplement: SupplementsService) {
    this.readUser();
  }

  ngOnInit(): void {}

  readUser() {
    this.supplement.getUsers().subscribe((data) => {
      this.User = data;
    });
  }
}
