import React from 'react';
import s from "./ProfileInfo.module.css"
import {Preloader} from "../Common/Preloader/Preloader";
import {render} from "react-dom";

export type ProfileStatusPropsType = { status: string }

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {editMode: false}
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                </div>
                }
            </>
        )
    }
}

export default ProfileStatus