import {IUser} from "@/models/IUser";
import Link from "next/link";

interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {

    return (
        <div>
            <Link href={{pathname: '/users/' + user.id.toString(), query: {data: JSON.stringify(user)}}}>{user.id}). {user.firstName} {user.lastName}</Link>
        </div>
    );
};