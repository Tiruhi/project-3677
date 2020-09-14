import React from "react";
import {MDBDropdown, MDBDropdownToggle, MDBBtn, MDBBtnGroup, MDBDropdownMenu, MDBDropdownItem} from "mdbreact";
import MoreVertical from "../../../../../assets/imgs/icons/more.svg";

const DropdownPage = () => {
    return (
        <MDBBtnGroup>
            {/*<MDBBtn >*/}
            {/*</MDBBtn>*/}
            <MDBDropdown>
                <MDBDropdownToggle caret>
                    <img src={MoreVertical} alt="" className="darken-1"/>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
        </MDBBtnGroup>
    );
}

export default DropdownPage;