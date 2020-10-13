import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListInformationComponent } from './ui/list-information/list-information.component';

@NgModule({
  declarations: [
    AppComponent,
    ListInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [
    ListInformationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
