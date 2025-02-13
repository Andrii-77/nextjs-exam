import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params: { id: string }
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> => {
    const {id} = await params;
    return {
        title: 'User page id ' + id,
    }

}

const UserPage: FC<Props> = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            User Page content {id}
        </div>
    );
};
export default UserPage;