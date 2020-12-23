import {addPost, setStatus, setUserProfile} from "../redux/profile-reducer";
import {addNewMessageAC} from "../redux/dialogs-reducer";
import {
    follow,
    setCurrentPage,
    setFollowingInProgress,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollo
} from "../redux/users-reducer";
import {setAuthUserData} from "../redux/auth-reducer";

export type ProfileResponseContactsType={
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type photosType = {
    small: null | string
    large: null | string
}

export type profileType = {
    contacts:ProfileResponseContactsType
    lookingForAJob:boolean
    lookingForAJobDescription:string | null
    fullName:string
    userId:number
    photos: photosType
}

export type userType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: photosType
    status: null | string
    followed: boolean
}

export type usersType = { users: Array<userType> }

export type ActionType = (ReturnType<typeof addPost> |
    ReturnType<typeof addNewMessageAC>| ReturnType<typeof follow> | ReturnType<typeof unFollo> | ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof setIsFetching>|
    ReturnType<typeof setAuthUserData>|ReturnType<typeof setUserProfile>|ReturnType<typeof setFollowingInProgress>|
    ReturnType<typeof setStatus>)
