import {getAll} from "@/services/api.service";
import {IUserResponseModel} from "@/models/IUserResponseModel";
import {UserComponent} from "@/components/user/UserComponent";
import {IUser} from "@/models/IUser";

export const UsersComponent = async () => {

    const {users}= await getAll<IUserResponseModel>('/users');
    console.log(users)

    return (
        <div>
            {users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};