import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';

//tambahan code berikut (2)
import {RecipeItemComponent} from "./recipe/recipe-list/recipe-item/recipe-item.component";

//tambahan code berikut (3)
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import { FooterComponent } from './footer/footer.component';

import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipe/recipe.service';
import { DataStorageService } from './shared/data-storage.service';


@NgModule({
   declarations: [
      AppComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent,

    //tambahan code berikut(2)
    RecipeItemComponent,
    //tambahkan code berikut(3)
    ShoppingEditComponent,
    FooterComponent,
    DropdownDirective,
],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      AppRoutingModule
   ],
   providers: [ShoppingListService, RecipeService, DataStorageService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
