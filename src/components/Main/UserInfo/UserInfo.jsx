import React from "react";
import './UserInfo.scss';
import Avatar from '@material-ui/core/Avatar';
import UserAvatar from '../../../assets/imgs/icons/menuIcons/user-icon-@2x.png';
import { Link } from 'react-router-dom';


const UserInfo = () => {
    return (
        <div className="user-content">
            <div className="d-flex flex-column">
                <div className="image-block">
                    <Avatar alt="USER-ICON-@2X" src={UserAvatar} className="avatar-icon" />
                </div>
                <div className="user-info">
                    <p className="info-name">Name Surname</p>
                    <span className="info-link">@nickname</span>
                </div>
                <div className="user-followers">
                    <Link to='/' className=" ">
                        Followers 1,020
                    </Link>
                </div>
                <div className="image-following">
                    <Link to='/' className=" ">
                        Following 10,562
                    </Link>
                </div>

            </div>
        </div>
    )
};

export default UserInfo;