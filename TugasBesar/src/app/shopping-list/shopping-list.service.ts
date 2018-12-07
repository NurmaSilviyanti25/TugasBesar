import { Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject}  from 'rxjs/Subject';
//import { EventEmitter } from 'events';
 
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  IngredientChange = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients:Ingredient[]=[
    new Ingredient('Apples',23),
    new Ingredient('tomato',10),
  ];

constructor() { }

getIngredients(){
  return this.ingredients.slice();
}

getIngredient(index: number){
  return this.ingredients[index];
}
addIngredient(ingredient:Ingredient){
  this.ingredients.push(ingredient);
  this.IngredientChange.next(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]){
  this.ingredients.push(...ingredients);
  this.IngredientChange.next(this.ingredients.slice());
} 

updateIngredient(index: number, newIngredient: Ingredient){
  this.ingredients[index] = newIngredient;
  this.IngredientChange.next(this.ingredients.slice());
}

deleteIngredient(index: number){
  this.ingredients.splice(index, 1);
  this.IngredientChange.next(this.ingredients.slice());
}

}
