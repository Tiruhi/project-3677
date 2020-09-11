import React from 'react'

import HomeIcon from "../../../assets/imgs/icons/menuIcons/home-24px.png";
import BellIcon from "../../../assets/imgs/icons/menuIcons/Group 20.png";
import AddIcon from "../../../assets/imgs/icons/menuIcons/add_24.png";
import MessageIcon from "../../../assets/imgs/icons/menuIcons/chat-24px.png";
import AccountIcon from "../../../assets/imgs/icons/menuIcons/account_24.png";
import SearchBtn from "../../../assets/imgs/icons/menuIcons/search-24px.png";


import "./Navbar.scss";
// import Home from './Home';
// import AboutUs from './AboutUs';
// import ContactUs from './ContactUs';

const Navbar = () => {

    return (

        <div className="row">
            <div className="col-12 offset-md-3 col-md-9">

                <img src={HomeIcon} alt="Home"/>

                <img src={BellIcon} alt="Notifications"/>

                <img src={AddIcon} alt="Add"/>

                <img src={MessageIcon} alt="Chat"/>

                <img src={AccountIcon} alt="Account"/>

            </div>
        </div>
    )

};

export default Navbar;