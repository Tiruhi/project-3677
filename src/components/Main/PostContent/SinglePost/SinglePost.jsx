import React from "react";
import './SinglePost.scss';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import UserAvatar from "../../../../assets/imgs/icons/menuIcons/user-icon-@2x.png";
import {Link} from "react-router-dom";
import POSTIMG1 from "../../../../assets/imgs/suggestions/postimg1.png";


const SinglePost = () => {
    return (
        <div className="post-container">
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                        <div className="post-block">
                            <Avatar alt="USER-ICON-@2X" src={UserAvatar} className="avatar-icon"/>
                        </div>
                        <div className="post-info d-flex flex-column">
                            <Link className="post-nik">
                                @nickname
                            </Link>
                            <Link className="post-date">
                                4 day ago
                            </Link>
                        </div>
                    </div>

                    <div className="post-dots">
                        <Button href="#text-buttons" color="primary">
                            Dots
                        </Button>
                    </div>
                </div>
                <div className="d-flex flex-column">

                    <div className="post-text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut
                        labore et dolore magna aliquyam erat.
                    </div>
                    <div className="post-img">
                        <img src={POSTIMG1} alt="POST IMG" className="postImg"/>
                    </div>
                </div>


            </div>

        </div>
    )
};

export default SinglePost