import React from 'react';
import s from "./ProfileInfo.module.css"


function ProfileInfo() {
    return (
        <div>

            <div>
                <img
                    src="https://images.ctfassets.net/mivicpf5zews/3HvVSAnvVSg6sisG2kG6m4/bb6ba99e22f7b4f3d08b4014513284c1/Manchester-United-Old-Trafford_Hero_1200x600px.jpg?w=1000"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo