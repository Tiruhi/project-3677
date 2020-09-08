import React, {Component} from "react";
import './main.scss';
import UserInfo from "./UserInfo/UserInfo";
import PostContent from "./PostContent/PostContent";
import Suggestion from "./Suggestions/Suggestions";

class Main extends Component {
  render() {

    return (

        <main className="main-container mt-5">
            <div className="row">
                <div className="col-12 col-md-3">
                    <UserInfo/>
                </div>
                <div className="col-12 col-md-6">
                    <PostContent/>
                </div>
                <div className="col-12 col-md-3">
                    <Suggestion/>
                </div>

            </div>
        </main>
    )
  }
}

export default Main;