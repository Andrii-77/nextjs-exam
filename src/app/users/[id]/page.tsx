import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";
import Link from "next/link";
import {getAll} from "@/services/api.service";
import {IRecipeResponseModel} from "@/models/IRecipeResponseModel";

type Props = {
    params: Promise<{ id: string }>,
    searchParams: Promise<SearchParams>
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: 'User page id ' + id,
    }

}

const UserPage: FC<Props> = async ({searchParams}) => {

    // це треба винести в хелпер.
    const {data} = await searchParams;
    let user = null;
    if (typeof data === "string") {
        user = JSON.parse(data) as IUser;
        console.log(user)
    }

    // const {recipes}= await getAll<IRecipeResponseModel>(`/recipes`);
    // const {recipes}= await getAll<IRecipeResponseModel>(`/recipes/search?q=${userId: user.id}`);

    return (
        <div>
            <h2>Інформація про користувача:</h2>
            <div>{
                user && <div>
                    <div>First Name: {user.firstName}</div>
                    <div>Last Name: {user.lastName}</div>
                    <div>Age: {user.age}</div>
                    <div>Email: {user.email}</div>
                    <div>Phone: {user.phone}</div>
                    <div>Birth Date: {user.birthDate}</div>
                    <div>Blood Group: {user.bloodGroup}</div>
                    <div>Height: {user.height}</div>
                    <div>Weight: {user.weight}</div>
                    <div>Eye Color: {user.eyeColor}</div>
                </div>
            }</div>
            <h2>Рецепти цього користувача:</h2>
            <div>
                {/*<Link href={`/recipes/${recipe.userId}`}>{recipe.title}</Link>*/}
                // Не знаю як зробити це посилання.
            </div>
        </div>
    );
};
export default UserPage;