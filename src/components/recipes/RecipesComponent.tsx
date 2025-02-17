import {getAllForPagination} from "@/services/api.service";
import {IRecipeResponseModel} from "@/models/IRecipeResponseModel";
import {IRecipe} from "@/models/IRecipe";
import {RecipeComponent} from "@/components/recipe/RecipeComponent";
import {PaginationComponent} from "@/components/pagination/PaginationComponent";

export const RecipesComponent = async () => {
    // const {recipes}= await getAll<IRecipeResponseModel>('/recipes');

    const {recipes} = await getAllForPagination<IRecipeResponseModel & { recipes: IRecipe[] }>('/recipes?skip=',
    "2");
    console.log(recipes)
    // треба подумати як перекинути currentPage замість 2


    return (
        <div>
            <PaginationComponent/>
            {recipes.map((recipe: IRecipe) => <RecipeComponent  key={recipe.id} recipe={recipe}/>)}
        </div>
    );
};