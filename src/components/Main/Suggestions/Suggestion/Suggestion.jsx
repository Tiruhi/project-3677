import React from "react";
import './Suggestion.sass';

import UserBackgroundImage from './../../../../assets/imgs/suggestions/user-1.png'


const Suggestion = () => {


    return (
        /*style={this.state.backgroundImage}*/
        <div className="suggestion" >
            <div className="suggestion-bg" style={{ backgroundImage: `url(${require("../../../../assets/imgs/suggestions/user-1.png")})` }}>
                <div className="suggestion-info">
                    <h2 className="h2 suggestion-name">Name Surname</h2>
                    <span className="suggestion-nik">@nickname</span>
                </div>
            </div>
        </div>
    )
};

export default Suggestion;