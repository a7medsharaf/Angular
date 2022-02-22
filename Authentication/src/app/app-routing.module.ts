import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { SafeBoxsGridComponent } from "./safe-boxs-grid/safe-boxs-grid.component";
import { UsersComponent } from "./users/users.component";

const approutes:Routes=[
    {path:'',component:SafeBoxsGridComponent},
     {path:'Grid/:Branch',component:SafeBoxsGridComponent},
     {path:'Users',component:UsersComponent}
    // {path:'servers',component:ServersComponentComponent,children:[
    //   {path:':id/edit',component:EditserverComponent}  
    // ]},
    // {path:'servers2',component:Servers2Component,canActivate : [ProductGuardService] ,children:[
    //   {path:':id/edit',component:Editserver2Component}  
    // ]},
    // {path:'servers3',component:Servers3Component ,children:[
    //   {path:':id',component:Editserver3Component}  
    // ]},
    // {path:'**',component:PageNotFoundComponent}
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