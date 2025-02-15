import {getAll} from "@/services/api.service";
import {IRecipeResponseModel} from "@/models/IRecipeResponseModel";
import {IRecipe} from "@/models/IRecipe";
import {RecipeComponent} from "@/components/recipe/RecipeComponent";

export const RecipesComponent = async () => {
    const {recipes}= await getAll<IRecipeResponseModel>('/recipes');
    console.log(recipes)

    return (
        <div>
            {recipes.map((recipe: IRecipe) => <RecipeComponent  key={recipe.id} recipe={recipe}/>)}
        </div>
    );
};