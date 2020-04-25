import { Injectable } from '@angular/core';
import { Observable, throwError, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  depressionResult: Number;
  anxietyResult: Number;
  sleepResult: Number;
  productivityResult: Number;
  heartHealthResult: Number;
  immuneSystemResult: Number;
  exerciseResult: Number;
  memoryResult: Number;

  depressionSupplements: [];
  anxietySupplements: [];
  sleepSupplements: [];
  productivitySupplements: [];
  heartHealthSupplements: [];
  immuneSystemSupplements: [];
  exerciseSupplements: [];
  memorySupplements: [];

  baseUri: string = 'https://boiling-woodland-09126.herokuapp.com/api';
  // baseUri: string = 'https://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  processResults(): Observable<any> {
    console.log('here');
    return this.http.get(`${this.baseUri}/supplements/depression`);
    // let response1 = this.http.get(`${this.baseUri}/supplements/depression`, {
    //   headers: this.headers,
    // });
    // let response2 = this.http.get(`${this.baseUri}/supplements/anxiety`, {
    //   headers: this.headers,
    // });
    // let response3 = this.http.get(`${this.baseUri}/supplements/sleep`, {
    //   headers: this.headers,
    // });
    // let response4 = this.http.get(`${this.baseUri}/supplements/productivity`, {
    //   headers: this.headers,
    // });
    // let response5 = this.http.get(`${this.baseUri}/supplements/heartHealth`, {
    //   headers: this.headers,
    // });
    // let response6 = this.http.get(`${this.baseUri}/supplements/immuneSystem`, {
    //   headers: this.headers,
    // });
    // let response7 = this.http.get(`${this.baseUri}/supplements/exercise`, {
    //   headers: this.headers,
    // });
    // let response8 = this.http.get(`${this.baseUri}/supplements/memory`, {
    //   headers: this.headers,
    // });

    // return forkJoin([
    //   response1,
    //   response2,
    //   response3,
    //   response4,
    //   response5,
    //   response6,
    //   response7,
    //   response8,
    // ]);
  }

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
