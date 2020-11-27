import React from 'react';
import s from "./ProfileInfo.module.css"
import {profileType} from '../ProfileContainer';
import {Preloader} from '../../Common/Preloader/Preloader';

export type ProfileInfoPropsType = {
    profile:profileType
}

function ProfileInfo(props:ProfileInfoPropsType) {

if ( !props.profile.photos){
    return <Preloader/>
}
    return (
        <div>

            <div>
                <img alt="profilePic"
                    src="https://images.ctfassets.net/mivicpf5zews/3HvVSAnvVSg6sisG2kG6m4/bb6ba99e22f7b4f3d08b4014513284c1/Manchester-United-Old-Trafford_Hero_1200x600px.jpg?w=1000"/>
            </div>
            <div className={s.descriptionBlock}>

                <img alt="?" src={ props.profile.photos.large? props.profile.photos.large:""} />
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo