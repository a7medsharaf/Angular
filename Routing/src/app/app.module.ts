import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServersComponentComponent } from './servers-component/servers-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { HomeComponent } from './home/home.component';
import { EditserverComponent } from './servers-component/editserver/editserver.component';
import { Servers2Component } from './servers2/servers2.component';
import { Editserver2Component } from './servers2/editserver2/editserver2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductGuardService } from './guard.service';
import { Servers3Component } from './servers3/servers3.component';
import { Editserver3Component } from './servers3/editserver3/editserver3.component';
import { ServersService } from './services/Servers.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponentComponent,
    EditserverComponent,
    UserComponentComponent,
    Servers2Component,
    Editserver2Component,
    PageNotFoundComponent,
    Servers3Component,
    Editserver3Component
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //RouterModule.forRoot(approutes)
  
  ],
  providers: [ProductGuardService,ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
