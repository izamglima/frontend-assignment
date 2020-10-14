import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { publishReplay, refCount, catchError } from 'rxjs/operators';
import { Objects } from '../interfaces/objects.interface';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  objects: Observable<Objects>;

  constructor(private httpClient: HttpClient) { }

  getObjects(): Observable<Objects> {
    if (!this.objects) {
      this.objects = this.httpClient.get<Objects>('assets/objects.json').pipe(
        publishReplay(1),
        refCount(),
        catchError(this.handleError)
      );
    }

    return this.objects;
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client side error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Backend returned error code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
