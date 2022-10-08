import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.module";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>;

  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel",
      "a super-tasty Schnitzel - just awesome!",
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/2560px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
       [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
       ]),
    new Recipe(
      "Big Fat Burger",
       "YUMM!",
       "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Burger_King_-_Angus_XT_Burger.tiff/lossless-page1-2560px-Burger_King_-_Angus_XT_Burger.tiff.png",
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1),
          new Ingredient('Bacon',2)
        ])

  ];
  getRecipes() {
    return this.recipes.slice();
  }
}