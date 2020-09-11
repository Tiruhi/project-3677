import React from "react";
import './UserInfo.scss';
import UserAvatar from '../../../assets/imgs/icons/menuIcons/user-icon-@2x.png';


const UserInfo = () => {
    return (
        <div className="user-content">
            <div className="d-flex flex-column">
                <div className="image-block">
                    <img alt="USER-ICON-@2X" src={UserAvatar} className="avatar-icon" />
                </div>
                <div className="user-info">
                    <p className="info-name">Name Surname</p>
                    <span className="info-link">@nickname</span>
                </div>
                <div className="user-followers">
                    <a className="a" href="#sc" >
                        Followers 1,020
                    </a>
                </div>
                <div className="image-following">
                    <a className="a" href="#">
                        Following 10,562
                    </a>
                </div>

            </div>
        </div>
    )
};

export default UserInfo;