import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayObjectsComponent } from './display-objects/display-objects.component';
import { DrawThreeDComponent } from './draw-three-d/draw-three-d.component';

@NgModule({
  declarations: [
    DisplayObjectsComponent,
    DrawThreeDComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DisplayObjectsComponent,
    DrawThreeDComponent
  ]
})
export class SharedModule { }
