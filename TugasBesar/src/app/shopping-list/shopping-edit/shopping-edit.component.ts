import { Component, OnInit,EventEmitter, Output, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
}) 
export class ShoppingEditComponent implements OnInit, OnDestroy {
@ViewChild('f') slForm: NgForm;
subscription: Subscription;
editMode = false;
editedItemIndex: number; 
editedItem: Ingredient; 

  constructor(private slsService:ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slsService.startedEditing
    .subscribe(
       (index: number) => {
         this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slsService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
       }
    );
  }

  onSubmit(from: NgForm){
    const value = from.value;
    const newIngredient= new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slsService.updateIngredient(this.editedItemIndex, newIngredient);
    }else{
      this.slsService.addIngredient(newIngredient);  
    }
    this.editMode = false;
    from.reset();
    
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slsService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
