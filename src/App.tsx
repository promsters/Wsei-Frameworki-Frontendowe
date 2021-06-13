import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import Main from "./containers/Main";
import Publications from "./containers/Publications";
import Entities from "./containers/Entities";
import UserProfile from "./containers/UserProfile";
import MainWrapper from "./components/Layout/MainWrapper";
import {useDispatch} from "react-redux";
import {getPhotos} from "./actions/photoActions";
import {getAllUsers} from "./actions/userActions";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getPhotos());
    }, []);
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
