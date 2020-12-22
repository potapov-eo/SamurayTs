import axios from 'axios';

const instance = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY":"b3ca8020-1484-4395-b201-af81d226c6c0"}
    })
export const UserAPI={
    getUsers(currentPage:number, pageSize:number){
        return  instance.get
        (`users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true}).then(response => response.data)
    },
    unfollow (id:number)  {
        return  instance.delete(`follow/${id}`).then(response => response.data)
    },
    follow  (id:number)  {
        return  instance.post(`follow/${id}`).then(response => response.data)
    },


}
export const AuthAPI={

    me() {
        return instance.get(`auth/me`,)
    },

}
export const profileAPI={
       getProfile(userId:string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId:string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`,{status:status} )
    },
}

