import React, {Component} from "react";
import './header.scss';
import {Button} from '@material-ui/core';
import BootstrapNavbar from "./BootstrapNavbar/BootstrapNavbar";

class Header extends Component {
    render() {

        return (

            <header className="header-container">

                {/*Search form */}

                <BootstrapNavbar />

                {/*Search form */}

            </header>
        )
    }
}

export default Header;