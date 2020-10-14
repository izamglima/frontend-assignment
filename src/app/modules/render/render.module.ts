import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderRoutingModule } from './render-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { RenderResolve } from './render.resolve';

console.warn("rendering module loaded");
@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    RenderRoutingModule,
    SharedModule
  ],
  exports: [ListComponent, DetailsComponent],
  providers: [RenderResolve]
})
export class RenderModule { }
