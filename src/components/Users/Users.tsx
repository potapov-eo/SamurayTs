import React from 'react';
import styles from './Users.module.css';
import {usersType, userType} from "../../redux/users-reducer";


export type UsersType ={
    users: Array<userType>
    follow:(userID: number) =>void
    unFollo:(userID: number) =>void
    setUsers: (users:Array<userType>) =>void
}

function Users(props:UsersType) {
    return (  <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollo(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>)
}
export default Users