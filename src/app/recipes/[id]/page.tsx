import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IRecipe} from "@/models/IRecipe";
import Link from "next/link";
import {getAll} from "@/services/api.service";
import {IUser} from "@/models/IUser";

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

    // @ts-ignore
    const user = await getAll<IUser>(`/users/${recipe.userId}`);

    return (
        <div>
            <h2>Детальна інформація про рецепт:</h2>
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
            <h2>Користувач, який створив цей рецепт:</h2>
            <div>
                {recipe && <div><Link href={{pathname: `/users/${recipe.userId}`, query: {data: JSON.stringify(user)}}}>{recipe.userId}). {user.firstName} {user.lastName}</Link></div>}
            </div>
        </div>
    );
};
export default RecipePage;