import Link from "next/link";

export const MenuForLogin = () => {
    return (
        <>
            <div><p>Вам потрібно аутентифікуватись:</p>
                <Link href={'/auth/login'}>Авторизація.</Link></div>
            <br/>
            <hr/>
        </>
    );
};