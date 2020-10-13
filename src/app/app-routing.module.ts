import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./render/render.module').then(m => m.RenderModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./render/render.module').then(m => m.RenderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
