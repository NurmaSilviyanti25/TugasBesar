import { Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';



@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  //property: class recipe
  recipes:Recipe[]=[
    new Recipe('Teknologi Perbankan',
    'Buku Administrasi Bank sangat diperlukan di Perguruan Tinggi pada Fakultas Ekonomi khususnya Program Studi Perbankan, Sekolah Tinggi Ilmu Ekonomi, Sekolah Menengah Kejuruan (SMK), dan para praktisi bank .',
    '../assets/img/1.jpg',
[
  new Ingredient('Pengarang Mintardjo',1),
  new Ingredient('Tahun Terbit',2013)
]),

  new Recipe('At A Glance Kesehatan Pasien',
  'Membahas tentang mutu pelayanan kesehatan yang ditulis terutama ditujukan untuk mahasiswa, dokter muda, dan profesional kesehatan. Buku ini menjembatani kesenjangan antara praktik dan teori untuk memastikan aspek keselamatan dan kesehatan pasien.',
  '../assets/img/2.jpg',
[
  new Ingredient('Pengarang Sukhmeet Panesar',1),
  new Ingredient('Tahun Terbit',2010)
]
),
new Recipe('Komunikasi Massa',
'Buku ini mendorong mahasiswa untuk lebih berperan aktif sebagai konsumen media dan memberikan mahasiswa pemahaman yang lebih dalam mengenai peran yang dimainkan media, baik dalam membentuk maupun merefleksikan budaya.',
'../assets/img/3.jpg',
[
new Ingredient('Pengarang Stanley J. Baran',1),
new Ingredient('Tahun Terbit',2017)
]
),
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }
  //tambahkan method addIngredientShoppingList dengan parameter ingredient[]
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }  

  //ta mbahkan parameter pada contruktor
constructor(private slsService:ShoppingListService) { }

setRecipes(recipes: Recipe[]){
  this.recipes = recipes;
  this.recipesChanged.next(this.recipes.slice());
}

addRecipe(recipe: Recipe){
  this.recipes.push(recipe);
  this.recipesChanged.next(this.recipes.slice());
}

updateRecipe(index: number, newRecipe: Recipe){
  this.recipes[index] = newRecipe;
  this.recipesChanged.next(this.recipes.slice());
}

deleteRecipe(index: number) {
  this.recipes.splice(index, 1);
  this.recipesChanged.next(this.recipes.slice());
}

}
