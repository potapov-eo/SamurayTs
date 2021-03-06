import React, {ChangeEvent} from 'react';
import s from "./ProfileInfo.module.css"
import {Preloader} from "../Common/Preloader/Preloader";
import {render} from "react-dom";

export type ProfileStatusPropsType = {
    status: string
    updateStatusThunk: (status: string) => void
}
export type ProfileStatusStateType = {
    editMode: boolean
    status: string
}


class ProfileStatus extends React.Component<ProfileStatusPropsType,ProfileStatusStateType> {
    state = {
        editMode: false,
        status: this.props.status,
        }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatusThunk(this.state.status)
    }
    onStatusChange=(e: ChangeEvent<HTMLInputElement>)=>{
                     this.setState({status:e.currentTarget.value})
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: ProfileStatusStateType, snapshot?: any) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }
            </>
        )
    }
}

export default ProfileStatus