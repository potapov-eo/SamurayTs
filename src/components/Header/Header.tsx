import React from 'react';
import s from "./Header.module.css"
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean,
    login: string|null,
    setAuthUserData: (userId: number|null, email: string|null, login: string|null, isAuth:boolean) => void
}

function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <img alt="headerPick" src="https://images-na.ssl-images-amazon.com/images/I/71MV0SKtt3L._SX425_.jpg"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={"/login"}> LOGIN </NavLink>}
            </div>
        </header>
    )
}

export default Header