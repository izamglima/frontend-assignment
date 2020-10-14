import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderRoutingModule } from './render-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from './../shared/shared.module';

console.warn("rendering module loaded");
@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    RenderRoutingModule,
    SharedModule
  ],
  exports: [ListComponent, DetailsComponent]
})
export class RenderModule { }
