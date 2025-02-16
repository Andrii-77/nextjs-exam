'use server';


export const saveAuth = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const data = {username, password};
    console.log(data);
    // await login(data);

}