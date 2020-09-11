import React from "react";
import './SinglePost.scss';
import UserAvatar from "../../../../assets/imgs/icons/menuIcons/user-icon-@2x.png";
import MoreVertical from "../../../../assets/imgs/icons/more.svg";
import POSTIMG1 from "../../../../assets/imgs/suggestions/postimg1.png";
import Like from "../../../../assets/imgs/icons/postIcons/mode_comment-24px.png";
import Comment from "../../../../assets/imgs/icons/postIcons/mode_comment-24px.png";
import Share from "../../../../assets/imgs/icons/postIcons/mode_comment-24px.png";
import Save from "../../../../assets/imgs/icons/postIcons/mode_comment-24px.png";


const SinglePost = () => {
    return (
        <div className="post-container">
            <div className="card dark-card">
                <div className="card-body">
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <div className="post-avatar-wrap">
                                    <img alt="USER-ICON-@2X" src={UserAvatar} className="avatar-icon"/>
                                </div>
                                <div className="post-info  d-flex flex-column ml-2">
                                    <a className="post-nik dark-blue font-18">
                                        @nickname
                                    </a>
                                    <div className="post-date dark-blue font-16">
                                        4 day ago
                                    </div>
                                </div>
                            </div>
                            <div className="post-settings">
                                <a href="#" >
                                    <img src={MoreVertical} alt="" className=""/>
                                </a>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="post-text my-3">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt
                                ut
                                labore et dolore magna aliquyam erat.
                            </div>
                            <div className="post-img my-3">
                                <img src={POSTIMG1} alt="POST IMG" className="postImg"/>
                            </div>
                        </div>
                        <div className="post-footer d-flex justify-content-between">
                            <div className="footer-buttons d-flex">
                                <div className="post-action">
                                    <a href="#" className="post-like">
                                        <img src={Like} alt="Like"/>
                                        Like
                                    </a>
                                </div>
                                <div className="post-action">
                                    <a href="#" className="post-comment">
                                        <img src={Comment} alt="Comment"/>
                                        Comment
                                    </a>
                                </div>
                                <div className="post-action">
                                    <a href="#" className="post-share">
                                        <img src={Share} alt="Share"/>

                                        Share
                                    </a>
                                </div>
                            </div>
                            <div className="footer-save">
                                <div className="post-action">
                                    <a href="#" className="post-save mr-0">
                                        <img src={Save} alt="Save"/>

                                        Save
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default SinglePost