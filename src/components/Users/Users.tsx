import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../accets/images/2322.png";
import {userType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import {deleteeUsers, postUsers} from '../../api/api';


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unFollo: (userID: number) => void
    users: Array<userType>
    setFollowingInProgress: (id: number, isFetching: boolean) => void
    followingInProgress: Array<number>
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
                        <img alt="userPhoto" src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}

                                      onClick={() => {
                                          props.setFollowingInProgress(u.id, true)
                                          deleteeUsers(u.id).then(data => {
                                              if (data.resultCode === 0) {
                                                  props.unFollo(u.id)
                                              }
                                              props.setFollowingInProgress(u.id, false)
                                          })

                                      }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {

                                          props.setFollowingInProgress(u.id, true)
                                          postUsers(u.id).then(data => {
                                              if (data.resultCode === 0) {
                                                  props.follow(u.id)
                                              }
                                              props.setFollowingInProgress(u.id, false)
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