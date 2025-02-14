import axios from 'axios';
import {baseUrl} from "@/constants/urls";
// import {IUser} from "@/models/IUser";
// import {IUserWithTokens} from "@/models/IUserWithTokens";
// import {retrieveLocalStorage} from "@/services/helpers";
// import {ITokenPair} from "@/models/ITokenPair";

// type LoginData = {
//     username: string;
//     password: string;
//     expiresInMins: number
// }

const axiosInstance = axios.create({
    baseURL: `${baseUrl}`,
    headers: {'Content-Type': 'application/json'}
});

// const axiosInstance = axios.create({
//     baseURL: 'https://dummyjson.com/auth',
//     headers: {}
// });


export const getAll = async <T> (endpoint: string) => {
    const axiosResponse = await axiosInstance.get<T>(endpoint);
    return axiosResponse.data;
};


export const getAllForPagination = async <T> (endpoint: string, page: string) => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    const axiosResponse = await axiosInstance.get<T>(`${baseUrl}${endpoint}${skip}`);
    return axiosResponse.data;
};


// axiosInstance.interceptors.request.use((requestObject) => {
//     if (requestObject.method?.toUpperCase() === 'GET') {
//         requestObject.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithTokens>('user').accessToken
//     }
//     return requestObject;
//
// })
//
//
// export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
//
//     const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
//     console.log(userWithTokens);
//     localStorage.setItem('user', JSON.stringify(userWithTokens));
//     return userWithTokens;
// }
//
//
// export const refresh = async () => {
//
//     const iUserWithTokens = retrieveLocalStorage<IUserWithTokens>('user');
//     const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
//         refreshToken: iUserWithTokens.refreshToken,
//         expiresInMin: 1
//     });
//     iUserWithTokens.accessToken = accessToken;
//     iUserWithTokens.refreshToken = refreshToken;
//     localStorage.setItem('user', JSON.stringify(iUserWithTokens));
//
//
// }
