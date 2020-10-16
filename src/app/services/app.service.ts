import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, merge } from 'rxjs';
import { publishReplay, refCount, catchError, map, mergeAll, mergeMap } from 'rxjs/operators';
import { Objects } from '../interfaces/objects.interface';
import { ObjectDetails } from '../interfaces/object.details.interface';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  objects: Observable<Objects>;
  objectDetails: Observable<ObjectDetails[]>;

  constructor(private httpClient: HttpClient) { }

  getObjects(): Observable<Objects> {
    if (!this.objects) {
      this.objects = this.httpClient.get<Objects>('assets/objects.json').pipe(
        publishReplay(1), //cache
        refCount(),
        catchError(this.handleError)
      );
    };

    return this.objects;
  }

  getObjectsDetails(objects): Observable<ObjectDetails[]> {
    if (!this.objectDetails) {
      this.objectDetails = merge(
        objects.urls.map((url) => {
          return this.httpClient.get<ObjectDetails>(url).pipe(
            publishReplay(1),
            refCount(),
            catchError(this.handleError)
          );
        })
      ).pipe(mergeAll())
    }

    return this.objectDetails;
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
