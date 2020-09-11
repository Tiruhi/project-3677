import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import HomeIcon from "../../../assets/imgs/icons/menuIcons/home-24px.png";
import BellIcon from "../../../assets/imgs/icons/menuIcons/Group 20.png";
import AddIcon from "../../../assets/imgs/icons/menuIcons/add_24.png";
import MessageIcon from "../../../assets/imgs/icons/menuIcons/chat-24px.png";
import AccountIcon from "../../../assets/imgs/icons/menuIcons/account_24.png";
import SearchBtn from "../../../assets/imgs/icons/menuIcons/search-24px.png";


import "./bootstrapNavbar.css";
// import Home from './Home';
// import AboutUs from './AboutUs';
// import ContactUs from './ContactUs';


class BootstrapNavbar extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 offset-md-3 col-md-9">

                        <Navbar variant="dark" expand="lg" sticky="top">
                            {/*<Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>*/}
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">

                                <Nav className=" nav  ">
                                    <Form inline bg="dark" >
                                        <Button variant="outline-success" className="search-btn">
                                            <img src={SearchBtn} alt="Search" />
                                        </Button>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    </Form>
                                </Nav>
                                <Nav className="ml-auto header-nav">

                                    <Nav.Link href="/">
                                        <img src={HomeIcon} alt="Home" />
                                    </Nav.Link>
                                    <Nav.Link href="/">
                                        <img src={BellIcon} alt="Notifications" />
                                    </Nav.Link>
                                    <Nav.Link href="/">
                                        <img src={AddIcon} alt="Add" />
                                    </Nav.Link>
                                    <Nav.Link href="/">
                                        <img src={MessageIcon} alt="Chat" />
                                    </Nav.Link>
                                    <Nav.Link href="/">
                                        <img src={AccountIcon} alt="Account" />
                                    </Nav.Link>
                                </Nav>






                            </Navbar.Collapse>
                        </Navbar>


                    </div>
                </div>
            </div>
        )
    }
}

export default BootstrapNavbar;