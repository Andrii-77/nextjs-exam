import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IRecipe} from "@/models/IRecipe";

type Props = {
    params: Promise<{ id: string }>,
    searchParams: Promise<SearchParams>
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> => {
    const {id} = await params;
    return {
        title: 'Recipe page id ' + id,
    }

}

const RecipePage:FC<Props> = async ({searchParams}) => {

    // це треба винести в хелпер.
    const {data} = await searchParams;
    let recipe = null;
    if (typeof data === "string") {
        recipe = JSON.parse(data) as IRecipe;
        console.log(recipe)
    }

    return (
        <div>
            {
                recipe && <div>
                    <div>Name: {recipe.name}</div>
                    <div>Ingredients: {recipe.ingredients.map((ingredient: string, index) => <ul key={index}><li>- {ingredient}</li></ul>)}</div>
                    <div>Prep Time Minutes: {recipe.prepTimeMinutes}</div>
                    <div>Cook Time Minutes: {recipe.cookTimeMinutes}</div>
                    <div>Servings: {recipe.servings}</div>
                    <div>Difficulty: {recipe.difficulty}</div>
                    <div>Cuisine: {recipe.cuisine}</div>
                    <div>Calories Per Serving: {recipe.caloriesPerServing}</div>
                    <div>Rating: {recipe.rating}</div>
                </div>
            }
        </div>
    );
};
export default RecipePage;