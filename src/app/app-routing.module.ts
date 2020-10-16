import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'objects',
    loadChildren: () => import('./modules/render/render.module').then(m => m.RenderModule)
  },
  {
    path: 'obects',
    loadChildren: () => import('./modules/render/render.module').then(m => m.RenderModule)
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
