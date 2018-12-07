import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy{

  recipes:Recipe[];
  subscription: Subscription;

  constructor(private recipeService:RecipeService,
              private router:Router,
              private route:ActivatedRoute) {}


//dikarenakan kita butuh method navigate maka kita import Router pada @angular/router
//setelah kita import maka kita panggil pertama kali dengan constructor
onNewRecipe(){
  this.router.navigate(['new'],{relativeTo:this.route})
}

ngOnDestroy(){
    this.subscription.unsubscribe();
}


  ngOnInit() {
     this.subscription = this.recipeService.recipesChanged
     .subscribe(
       (recipes: Recipe[]) => {  
            this.recipes = recipes;
       }
     );
    this.recipes=this.recipeService.getRecipes();
  }
    
  // onRecipeSelected(recipe:Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

}
