import axios from 'axios';
import {GetUsersResponseType} from "../redux/users-reducer";
import {photosType, ProfileResponseContactsType} from "../Types/Types";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "b3ca8020-1484-4395-b201-af81d226c6c0"}
})

type ResponseType<D={}> ={
    resultCode: number
    messages: Array<string>,
    data: D
}
type authResponseDataType={
    id: number
    email:string
    login:string
}

type ProfileResponseType={
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileResponseContactsType
    photos: photosType
   }
type ResponseCaptchaType={
    url:string
}
export const UserAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType>
        (`users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true}).then(response => response.data)
    },
    unfollow(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`).then(response => response.data)
    },
    follow(id: number) {
        return instance.post<ResponseType>(`follow/${id}`).then(response => response.data)
    },


}
export const AuthAPI = {

    me() {
        return instance.get<ResponseType<authResponseDataType>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean=false, captcha:string) {
        return instance.post<ResponseType<{id:number}>>(`auth/login/`, {email, password, rememberMe, captcha})
    },
    logOut() {
        return instance.delete<ResponseType>(`auth/login/`)
    },
    getCaptcha() {
        return instance.get<ResponseCaptchaType>(`/security/get-captcha-url`)
    }

}
export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileResponseType>(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status/`, {status: status})
    },

}

