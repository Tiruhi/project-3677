import React from 'react'

import HomeIcon from "../../../assets/imgs/icons/menuIcons/home-24px.png";
import BellIcon from "../../../assets/imgs/icons/menuIcons/Group 20.png";
import AddIcon from "../../../assets/imgs/icons/menuIcons/add_24.png";
import MessageIcon from "../../../assets/imgs/icons/menuIcons/chat-24px.png";
import AccountIcon from "../../../assets/imgs/icons/menuIcons/account_24.png";
import SearchBtn from "../../../assets/imgs/icons/menuIcons/search-24px.png";


import "./Navbar.scss";
import SearchPage from "./SearchPage/SearchPage";
// import Home from './Home';
// import AboutUs from './AboutUs';
// import ContactUs from './ContactUs';

const Navbar = () => {

    return (

        <div className="row">
            <div className="col-6 offset-md-3 col-md-6 w-100">
                <SearchPage/>
            </div>
            <div className="col-3 col-md-3 d-flex justify-content-end align-items-center header-nav" >
                <a href="#">
                    <img src={HomeIcon} alt="Home"/>
                </a>

                <a href="#">

                    <img src={BellIcon} alt="Notifications"/>
                </a>
                <a href="#">
                    <img src={AddIcon} alt="Add"/>
                </a>

                <a href="#">
                    <img src={MessageIcon} alt="Chat"/>
                </a>

                <a href="#">
                    <img src={AccountIcon} alt="Account"/>
                </a>

            </div>
        </div>
    )
};

export default Navbar;