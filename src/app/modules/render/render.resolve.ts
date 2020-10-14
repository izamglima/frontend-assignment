import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AppService } from './../../services/app.service';
import { Objects } from './../../interfaces/objects.interface';

@Injectable()
export class RenderResolve implements Resolve<Objects> {
  constructor(private appService: AppService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Objects> {
    return this.appService.getObjects();
  }
}