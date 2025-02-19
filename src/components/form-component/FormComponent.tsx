'use client'

import {useForm} from "react-hook-form";
import {userValidator} from "@/validators/user.validator";
import {joiResolver} from "@hookform/resolvers/joi";
// import {saveAuth} from "@/server-actions/serverActions";

interface IFormProps {
    username: string,
    password: string
}


export const FormComponent = () => {
    const {handleSubmit, register, formState: {errors, isValid}}
        = useForm<IFormProps>({mode: 'all', resolver: joiResolver(userValidator)});

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);// не знаю як це перекинути в логін.
        return formDataProps;
    };


    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
            {/*<form action={saveAuth}>*/}
                <div><label>
                    <input type="text" {...register('username')} placeholder={'Username'}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label></div>

                <div><label>
                    <input type="text" {...register('password')} placeholder={'Password'}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label></div>
                <button disabled={!isValid}>Авторизуватись</button>
            </form>
        </div>
    );
};