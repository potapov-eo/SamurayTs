import React from 'react';
import styles from './Users.module.css';
import {usersType, userType} from "../../redux/users-reducer";
import axios from 'axios'
import userPhoto from "../../accets/images/2322.png"

export type UsersType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    users: Array<userType>
    follow: (userID: number) => void
    unFollo: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}

class Users extends React.Component<UsersType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
onPageChanged=(pageNumber:number)=>{
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
    })
}
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (<div>
            {pages.map(p => {
                return <span className={(this.props.currentPage === p) ? styles.selectedPage : ""}
                             onClick={(e) => { this.onPageChanged(p)}}>  {p} </span>
            })}

            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unFollo(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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

        </div>)
    }
}

export default Users