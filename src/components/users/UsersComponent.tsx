// 'use client'

import {getAllForPagination} from "@/services/api.service";
import {IUserResponseModel} from "@/models/IUserResponseModel";
import {UserComponent} from "@/components/user/UserComponent";
import {IUser} from "@/models/IUser";
import {PaginationComponent} from "@/components/pagination/PaginationComponent";

export const UsersComponent = async () => {

    // const {users}= await getAll<IUserResponseModel>('/users');
    // console.log(users)

    // const {users}= await getAllForPagination<IUserResponseModel & { users: IUser[] }>('/users?skip=', currentPage);

    const {users}= await getAllForPagination<IUserResponseModel & { users: IUser[] }>('/users?skip=', "1");
    console.log(users)
    // треба подумати як перекинути currentPage замість 3

    return (

        <div>
            <PaginationComponent/>
            <div>{users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}</div>
        </div>
    );

};

