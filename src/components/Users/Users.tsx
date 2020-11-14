import React from 'react';
import styles from './Users.module.css';
import {usersType, userType} from "../../redux/users-reducer";
import  axios from 'axios'
import userPhoto from "../../accets/images/2322.png"

export type UsersType ={
    users: Array<userType>
    follow:(userID: number) =>void
    unFollo:(userID: number) =>void
    setUsers: (users:Array<userType>) =>void
}

function Users(props:UsersType) {
 /*if(props.users.length===0)   { axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
      props.setUsers(response.data.items)
       })}*/
   const addUsers = () => {axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
       props.setUsers(response.data.items)
   })}

    return (  <div>
        {
            props.users.map(u =>  <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small?u.photos.small:userPhoto} className={styles.userPhoto}/>
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
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>

                </span>

            </div>)
        }
        <button onClick={addUsers} >add</button>
    </div>)
}
export default Users