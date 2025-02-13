import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params: { id: string }
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> => {
    const {id} = await params;
    return {
        title: 'Recipe page id ' + id,
    }

}

const RecipePage:FC<Props> = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            Recipe Page content {id}
        </div>
    );
};
export default RecipePage;