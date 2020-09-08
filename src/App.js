import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import {
    BrowserRouter ,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
    return (
        <BrowserRouter>
            <div className="App ">

                <div className="container">
                    <Switch>


                        <Route path="/" >
                            <Header/>
                            <Main />
                        </Route>
                    </Switch>

                </div>

            </div>
        </BrowserRouter>


    );
}

export default App;
