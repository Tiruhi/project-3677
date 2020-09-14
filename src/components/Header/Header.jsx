import React, { Component } from "react";
import './header.scss';
import Navbar from "./Navbar/Navbar";

class Header extends Component {
    render() {

        return (

            <header className="header-container mt-3">

                {/*Search form */}

                <Navbar />

                {/*Search form */}

            </header>
        )
    }
}

export default Header;