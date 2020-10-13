import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderRoutingModule } from './render-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';


console.warn("rendering module loaded");
@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    RenderRoutingModule
  ],
  exports: [ListComponent, DetailsComponent]
})
export class RenderModule { }
