import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.module";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Milk", 1),
    new Ingredient("Eggs", 2)

  ];
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
