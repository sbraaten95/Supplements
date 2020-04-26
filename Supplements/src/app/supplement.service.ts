import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Supplement } from './model/supplement';

@Injectable({
  providedIn: 'root',
})
export class SupplementService {
  baseUri: string = 'https://boiling-woodland-09126.herokuapp.com/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  Supplement = new Supplement();

  constructor(private http: HttpClient) {}

  // Create
  createSupplement(data): Observable<any> {
    let url = `${this.baseUri}/supplements/create`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  // Get all Supplements
  getSupplements() {
    return this.http.get(`${this.baseUri}/supplements`);
  }

  // Get Supplement
  getSupplement(id): Observable<any> {
    let url = `${this.baseUri}/supplements/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update Supplement
  updateSupplement(id, data): Observable<any> {
    let url = `${this.baseUri}/supplements/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Delete Supplement
  deleteSupplement(id): Observable<any> {
    let url = `${this.baseUri}/supplements/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
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
