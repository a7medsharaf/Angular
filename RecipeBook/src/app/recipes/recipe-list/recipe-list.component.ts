import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from "../../../Models/Recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe("Chicken Curry","https://img.delicious.com.au/Whdi4i8g/w759-h506-cfill/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg","Chicken with curry sauce"),
    new Recipe("Italian Pizza","https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg","Italian Pizza")
    
      ];
      @Output() emitactiverecipeEvent = new EventEmitter<Recipe>();
      emitfirst(R:Recipe)
      {
        this.emitactiverecipeEvent.emit(R);
      }
    
  constructor() { }

  ngOnInit(): void {

    console.log(this.recipes);
    console.log("Started emitting first recipe");
    console.log(this.recipes[0]);
    this.emitfirst(this.recipes[0])
    console.log("ended emitting first recipe");
  }

}
