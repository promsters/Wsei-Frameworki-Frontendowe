import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import Main from "./containers/Main";
import Publications from "./containers/Publications";
import Entities from "./containers/Entities";
import UserProfile from "./containers/UserProfile";
import MainWrapper from "./components/Layout/MainWrapper";

function App() {
  return (
    <div className="App">
        <MainWrapper>
            <Switch>
                <Route path={"/"} exact component={Main} />
                <Route path={"/publications"} exact component={Publications} />
                <Route path={"/entities"} exact component={Entities} />
                <Route path={"/profile"} exact component={UserProfile} />
                <Redirect to={"/"} />
            </Switch>
        </MainWrapper>
    </div>
  );
}

export default App;
