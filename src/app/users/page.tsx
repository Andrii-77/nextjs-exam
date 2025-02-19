import {UsersComponent} from "@/components/users/UsersComponent";
import {PaginationComponent} from "@/components/pagination/PaginationComponent";

const UsersPage = () => {
    return (
        <div>
            <br/>
            <PaginationComponent/>
            <br/>
            <UsersComponent/>
            <hr/>
        </div>
    );
};

export default UsersPage;
