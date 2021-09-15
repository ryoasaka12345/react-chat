import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Rooms } from "./components/Rooms";
import "./App.css";
import SocketConnection from "../socket/connection";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const socket = new SocketConnection();
  dispatch({ type: `SET_CONNECTION`, connection: socket });
  return (
    <>
      <h1>Wellcome to the market.</h1>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/chat">
          <Rooms />
        </Route>
      </Switch>
    </>
  );
}

export default App;
