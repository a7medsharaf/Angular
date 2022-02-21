import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Movies } from './services/movies.service';
import { FormsModule } from '@angular/forms';
import { myinterceptor } from './services/myinterceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Movies,
    {provide:HTTP_INTERCEPTORS,useClass:myinterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
