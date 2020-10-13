import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { Broser3DRoutingModule } from './broser3D-routing.module';

//console.warn("browser module loaded");
@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    Broser3DRoutingModule,
    CommonModule
  ],
  exports: [ListComponent, DetailsComponent]
})
export class Browser3DModule { }
