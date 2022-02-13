import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeBook';
  selectedcomp:string="Recipes";

  Get_Selected_Section(newItem: string): void {
   console.log(newItem);
    this.selectedcomp=newItem;
  }

  ShowRecipes()
  {
    return this.selectedcomp==="Recipes";
  }
}
