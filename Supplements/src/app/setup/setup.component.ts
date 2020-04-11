import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SupplementsService } from '../supplements.service';
import { AppComponent } from '../app.component';
import { AuthService } from '../auth.service';
import { User } from '../model/user';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;
  currentUser: User;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private ngZone: NgZone,
    private supplement: SupplementsService,
    private appComponent: AppComponent
  ) {
    this.mainForm();
  }

  ngOnInit(): void {}

  mainForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: [''],
    });
  }

  // Getter to access form control
  get myForm() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return false;
    } else {
      this.supplement.createUser(this.userForm.value).subscribe(
        (res) => {
          this.ngZone.run(() => this.router.navigateByUrl(`/login`));
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
