import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUri: string = 'https://boiling-woodland-09126.herokuapp.com/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = new User();

  constructor(private http: HttpClient, public router: Router) {}

  getCurrentUser() {
    let id = localStorage.getItem('access_token');
    this.getUser(id).subscribe((res) => {
      this.currentUser = res;
    });
  }

  // Create
  createUser(data): Observable<any> {
    let url = `${this.baseUri}/users/register`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  login(user: User) {
    let url = `${this.baseUri}/users/login`;
    return this.http.post<any>(url, user).subscribe((res: any) => {
      localStorage.setItem('access_token', res[0]._id);
      this.getUser(res[0]._id).subscribe((res) => {
        this.currentUser = res;
        this.router.navigate(['profile/' + res._id]);
      });
    });
  }

  isLoggedIn() {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['/']);
    }
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  // Get all employees
  getUsers() {
    return this.http.get(`${this.baseUri}/users`);
  }

  // Get employee
  getUser(id): Observable<any> {
    let url = `${this.baseUri}/users/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update employee
  updateUser(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Delete employee
  deleteUser(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url).pipe(catchError(this.errorMgmt));
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
