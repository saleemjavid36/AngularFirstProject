import { Component,Output, OnInit,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
  
  recipes:Recipe[]=[
    new Recipe('A Test Recipe','this is simply a test','https://wearychef.com/wp-content/uploads/2018/01/vegetable-beef-soup-tall.jpg'),
    new Recipe('Another Test Recipe','this is simply a test','https://th.bing.com/th/id/R.776c6de2295e95d9f13382849b1f7bdb?rik=odEjkqpDKN2MIQ&riu=http%3a%2f%2ffoodtalk4you.com%2fwp-content%2fuploads%2f2017%2f01%2fRecipes-Banner-1024x576.jpg&ehk=%2ff4Gd6YA30jRfz9549Qi6itO0j%2fyibePnoL%2b3tOVvxo%3d&risl=&pid=ImgRaw&r=0')
  ];

  constructor(){

  }
  ngOnInit(){
      
  }

  onRecipeSelected(recipe:Recipe ){
    this.recipeWasSelected.emit(recipe)
}


}
  
