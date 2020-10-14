import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayModelsComponent } from './display-models/display-models.component';
import { DrawThreeDComponent } from './draw-three-d/draw-three-d.component';

@NgModule({
  declarations: [
    DisplayModelsComponent,
    DrawThreeDComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DisplayModelsComponent,
    DrawThreeDComponent
  ]
})
export class SharedModule { }
