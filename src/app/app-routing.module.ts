import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'list',
    loadChildren: () => import('./modules/render/render.module').then(m => m.RenderModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./modules/render/render.module').then(m => m.RenderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
