import React from "react";
import './SinglePost.scss';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import UserAvatar from "../../../../assets/imgs/icons/menuIcons/user-icon-@2x.png";
import { Link } from "react-router-dom";
import POSTIMG1 from "../../../../assets/imgs/suggestions/postimg1.png";
import { Card, DropdownButton } from 'react-bootstrap';



const SinglePost = () => {
    return (
        <div className="post-container">
            <Card className="dark-card">
                <Card.Body>
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row">
                                <div className="post-block">
                                    <Avatar alt="USER-ICON-@2X" src={UserAvatar} className="avatar-icon" />
                                </div>
                                <div className="post-info  d-flex flex-column ml-2">
                                    <Link className="post-nik dark-blue font-18">
                                        @nickname
                                    </Link>
                                    <div className="post-date dark-blue font-16">
                                        4 day ago
                                    </div>
                                </div>
                            </div>
                            <div className="post-dots">
                                <Button href="#text-buttons" color="primary">
                                    Dots
                                 </Button>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="post-text my-3">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                                ut
                                labore et dolore magna aliquyam erat.
                            </div>
                            <div className="post-img my-3">
                                <img src={POSTIMG1} alt="POST IMG" className="postImg" />
                            </div>
                        </div>
                        <div className="post-footer d-flex justify-content-between">
                            <div className="footer-button">
                                <div className="">

                                </div>
                                <div className="">

                                </div>
                                <div className="">

                                </div>
                            </div>
                            <div className="footer-save">
                                <div className="">

                                </div>
                            </div>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
};

export default SinglePost