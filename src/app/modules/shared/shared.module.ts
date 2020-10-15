import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayObjectsComponent } from './display-objects/display-objects.component';
import { DrawThreeDComponent } from './draw-three-d/draw-three-d.component';
import { RenderRoutingModule } from './../render/render-routing.module';

@NgModule({
  declarations: [
    DisplayObjectsComponent,
    DrawThreeDComponent
  ],
  imports: [
    CommonModule,
    RenderRoutingModule
  ],
  exports: [
    DisplayObjectsComponent,
    DrawThreeDComponent
  ]
})
export class SharedModule { }
