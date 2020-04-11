import { Component } from '@angular/core';
import { SupplementsService } from './supplements.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Supplements';

  constructor(public supplement: SupplementsService) {}

  logout() {
    this.supplement.logout();
  }

  loggedIn() {
    return this.supplement.isLoggedIn();
  }
}
