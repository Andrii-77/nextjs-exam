import {IUser} from "@/models/IUser";
import Link from "next/link";

interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {

    return (
        <div>
            <Link href={'/users/' + user.id.toString()}>{user.id} {user.firstName} {user.lastName}</Link>
        </div>
    );
};