import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { RenderResolve } from './render.resolve';

const routes: Routes = [
    {
        path: '',
        component: ListComponent,
        resolve: {
            objects: RenderResolve
        }
    },
    {
        path: 'details',
        component: DetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RenderRoutingModule {

}
