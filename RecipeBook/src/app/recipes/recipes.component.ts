import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../Models/Recipe.model";
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  targetRecipe:Recipe =new Recipe("SSS","","");
  constructor() { }
  Set_Active_Recipe(R:Recipe)
  {
    console.log("got a new emiition in parent"+R);
    this.targetRecipe=R;
  }
  ngOnInit(): void {
  }

}
