import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Chat } from "./components/Chat";
import "./App.css";

function App() {
  return (
    <>
      <h1>Wellcome to the market.</h1>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </>
  );
}

export default App;
