import React from "react";
import './Suggestion.scss';

import UserBackgroundImage from './../../../../assets/imgs/suggestions/user-1.png'
// import POSTIMG1 from "../../../../assets/imgs/suggestions/postimg1.png";


const Suggestion = () => {

    return (
        /*style={this.state.backgroundImage}*/
        <div className="suggestion position-relative">

            <div className="suggestion-bg">
                <img src={UserBackgroundImage} alt="User Image" className="user-img"/>
            </div>

            <div className="suggestion-info position-absolute">
                <h2 className="h2 suggestion-name">Name Surname</h2>
                <span className="suggestion-nik">@nickname</span>
            </div>

        </div>
    )
};

export default Suggestion;