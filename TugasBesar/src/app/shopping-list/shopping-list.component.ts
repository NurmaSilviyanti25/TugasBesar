import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService} from '../shopping-list/shopping-list.service';
//import {Ingredient} from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy  {

  ingredients:Ingredient[]
  private subcription : Subscription   
  // =[
  //   new Ingredient('Apples',23),
  //   new Ingredient('tomato',10),
  // ];
  
  constructor(private slsService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slsService.getIngredients();
    this.subcription = this.slsService.IngredientChange
    .subscribe(
      (Ingredient:Ingredient[])=>{
        this.ingredients=Ingredient;
      }
    )
  }

  onEditItem(index:number){
    this.slsService.startedEditing.next(index);
  }
  
  ngOnDestroy (){
    this.subcription.unsubscribe();
  }
  // onIngredientAdded(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);
  // }

}
