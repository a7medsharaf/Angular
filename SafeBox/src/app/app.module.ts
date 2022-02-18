import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SafeBoxsGridComponent } from './safe-boxs-grid/safe-boxs-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SafeBoxsGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
