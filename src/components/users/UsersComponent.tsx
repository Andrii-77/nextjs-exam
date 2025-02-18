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
    // треба подумати як перекинути currentPage замість 1

    return (

        <div>
            <PaginationComponent/>
            <div>{users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}</div>
        </div>
    );

};









// const page = "1";
// let currentPage = Number(page || '1');
// const perPage = 30;
// const total = 208
// console.log(currentPage)
//
// const {users}= await getAllForPagination<IUserResponseModel & { users: IUser[] }>('/users?skip=', currentPage);
// console.log(users)
// // треба подумати як перекинути currentPage замість 3
//
// return (
//
//     <div>
//         <div>
//             <div>{currentPage > 0 && <Link href={`?page=${currentPage - 1}`}>Попередня сторінка</Link>}</div>
//             <div>{currentPage * perPage < total &&
//                 <Link href={`?page=${currentPage + 1}`}>Наступна сторінка</Link>}</div>
//
//         </div>
//         {/*<PaginationComponent/>*/}
//         <div>{users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}</div>
//     </div>
// );

// };


// let page = "1";
// let currentPage = Number(page || '1');
// const perPage = 30;
// const total = 208
//
// return (
//
//     <div>
//         <div>
//             <button onClick={() => {
//                 if(currentPage > 1) {
//                     page = (--currentPage).toString();
//                     console.log(currentPage)
//                 }
//             }}>prev</button>
//             <button onClick={() => {
//                 if(currentPage * perPage < total)
//                     page = (++currentPage).toString();
//                 console.log(currentPage)
//             }}>next</button>
//         </div>
//         {/*<PaginationComponent/>*/}
//         <div>{users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}</div>
//     </div>
// );


