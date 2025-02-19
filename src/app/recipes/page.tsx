import {RecipesComponent} from "@/components/recipes/RecipesComponent";
import {PaginationComponent} from "@/components/pagination/PaginationComponent";

const RecipesPage = () => {
    return (
        <div>
            <br/>
            <PaginationComponent/>
            <br/>
            <RecipesComponent/>
            <hr/>
        </div>
    );
};

export default RecipesPage;
