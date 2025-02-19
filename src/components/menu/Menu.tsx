import Link from "next/link";

export const Menu = () => {
    return (
        <>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/users'}>Users</Link>
                </li>
                <li>
                    <Link href={'/recipes'}>Recipes</Link>
                </li>
                <li>
                    <Link href={'/search'}>Search</Link>
                </li>
            </ul>
            <br/>
            <hr/>
        </>
    );
};