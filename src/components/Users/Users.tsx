import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../accets/images/2322.png";
import {userType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import axios from 'axios';


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unFollo: (userID: number) => void
    users: Array<userType>
}

let Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(p => {
            return <span className={(props.currentPage === p) ? styles.selectedPage : ""}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}>  {p} </span>
        })}

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow${u.id}`,  {
                                    withCredentials: true,
                                    headers:"b3ca8020-1484-4395-b201-af81d226c6c0"
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unFollo(u.id)
                                        }
                                    })

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow${u.id}`, {}, {
                                    withCredentials: true
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                    })
                            }}
                            > Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>

                </span>

            </div>)
        }

    </div>
}
export default Users