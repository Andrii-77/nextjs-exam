import Link from "next/link";
import {IRecipe} from "@/models/IRecipe";

interface RecipeComponentProps {
    recipe: IRecipe
}

export const RecipeComponent = ({recipe}: RecipeComponentProps) => {

    return (
        <div>
            <div><Link href={{pathname: '/recipes/' + recipe.id.toString(), query: {data: JSON.stringify(recipe)}}}>{recipe.id}). {recipe.name}</Link></div>
            <div><Link href={'/tag'}>{recipe.tags.map((tag, index) => <div key={index}>{tag}</div>)}</Link></div>
        </div>
    );
};