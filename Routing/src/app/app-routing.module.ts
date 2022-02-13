import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { ServersComponentComponent } from './servers-component/servers-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { HomeComponent } from './home/home.component';
import { EditserverComponent } from './servers-component/editserver/editserver.component';
import { Servers2Component } from './servers2/servers2.component';
import { Editserver2Component } from './servers2/editserver2/editserver2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductGuardService } from "./guard.service";
import { Servers3Component } from "./servers3/servers3.component";
import { Editserver3Component } from "./servers3/editserver3/editserver3.component";

const approutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'users/:id',component:UserComponentComponent},
    {path:'servers',component:ServersComponentComponent,children:[
      {path:':id/edit',component:EditserverComponent}  
    ]},
    {path:'servers2',component:Servers2Component,canActivate : [ProductGuardService] ,children:[
      {path:':id/edit',component:Editserver2Component}  
    ]},
    {path:'servers3',component:Servers3Component ,children:[
      {path:':id',component:Editserver3Component}  
    ]},
    {path:'**',component:PageNotFoundComponent}
  ]

@NgModule({
    imports: [
      // RouterModule.forRoot(appRoutes, {useHash: true})
      RouterModule.forRoot(approutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }