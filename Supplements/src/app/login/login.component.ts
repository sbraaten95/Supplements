import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginErrors: string;

  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    public router: Router
  ) {
    this.mainForm();
  }

  mainForm() {
    this.loginForm = this.fb.group({
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

  ngOnInit() {}

  loginUser() {
    this.userService.login(this.loginForm.value);
    this.loginErrors = 'Login failed. Try again.';
  }
}
