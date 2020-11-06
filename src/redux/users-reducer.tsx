import {ActionType } from "./store";

export type userType = {
    id: number
    followed: boolean
    fullName:string
    status:string
    location:{city:string,country:string}
    photoUrl:string
}

export type usersType ={ users:Array<userType> }


let initialState  = {
    users: [
        {id: 1, followed : true, fullName:"Fray", status: "I'm the boss", location: {city: "Minsk", country: "Belarus" },photoUrl:"https://cdn.shopify.com/s/files/1/0941/8552/products/Angry-Bender-Futurama-_Converted_1024x1024.jpg?v=1530022703"},
        {id: 2, followed : false, fullName:"Bender", status: "I'm new boss", location: {city: "Moscow", country: "Russia"},photoUrl:"https://ih1.redbubble.net/image.350047691.3078/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u2.jpg" },
        {id: 3, followed : true, fullName:"Bob", status: "I'm only Bob", location: {city: "Bobruisk", country: "Belarus" },photoUrl:"https://c0.klipartz.com/pngpicture/792/488/gratis-png-nibbler-leela-bender-zoidberg-dibujo-futurama.png"},
          ],

}
export const userReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "UNFOLLOW" :
           return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "FOLLOW" :
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "SET-USERS" :
            return {
                ...state, users: [ ...state.users, ...action.users]
            }
        default:
            return state
    }
}
export const followAC = (userId:number) => ({type: "FOLLOW", userId}as const)
export const unFollowAC = (userId:number) => ({type: "UNFOLLOW", userId}as const)
export const setUsersAC = (users:Array<userType>) => ({type: "SET-USERS", users}as const)

