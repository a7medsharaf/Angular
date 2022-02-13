import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoopinglistComponent } from './shoopinglist/shoopinglist.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoopingeditComponent } from './shoopinglist/shoopingedit/shoopingedit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { PDirectiveDirective } from './directives/p-directive.directive';
import { PbetterDirectiveDirective } from './directives/pbetter-directive.directive';
import { UnlessDirective } from './directives/unless.directive'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoopinglistComponent,
    RecipesComponent,
    ShoopingeditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    PDirectiveDirective,
    PbetterDirectiveDirective,
    UnlessDirective
   

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  

 

  
  }

  

