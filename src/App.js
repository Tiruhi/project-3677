import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import './dist/css/mdb.css';

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
