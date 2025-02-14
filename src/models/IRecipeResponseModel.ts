import {IRecipe} from "@/models/IRecipe";

export interface IRecipeResponseModel {
  recipes: IRecipe[];
  total: number;
  skip: number;
  limit: number;
}