import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import Main from "./containers/Main";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={Main} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
