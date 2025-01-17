import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";

import "./searchPage.scss"

const SearchPage = () => {
    return (
        <MDBCol md="12" className="p-0">
            <div className="input-group md-form form-sm form-1 pl-0">
                <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="" icon="search" />
          </span>
                </div>
                <input className="form-control my-0 py-4"  type="text" placeholder="Search" aria-label="Search" />
            </div>
        </MDBCol>
    );
}

export default SearchPage;