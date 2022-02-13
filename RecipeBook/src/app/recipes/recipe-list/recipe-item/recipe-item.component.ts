import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/Models/Recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() Recipedata:Recipe =new Recipe("","","");
  @Output() Recipedataemit=new EventEmitter<Recipe>();

  constructor() { }
  emitactive(R:Recipe)
  {
   console.log("emiittttting");
    this.Recipedataemit.emit(R);
  }
  ngOnInit(): void {
  }

}
