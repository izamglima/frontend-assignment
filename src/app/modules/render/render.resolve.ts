import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { AppService } from './../../services/app.service';
import { Objects } from './../../interfaces/objects.interface';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class RenderResolve implements Resolve<Objects> {
  constructor(private appService: AppService) {}

  //Data should be loaded before navigation
  resolve(route: ActivatedRouteSnapshot): any {
    let details = [];

    return this.appService.getObjects().pipe(mergeMap(objects => {
      return this.appService.getObjectsDetails(objects).pipe(map(objectDetails => {
        details.push(objectDetails);
        return {objects: objects, details: details};
      }))
    }));
  }
}