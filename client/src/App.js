import React from "react";
import { Route, Switch } from "react-router-dom";
import IndexPage from "./pages/indexPage.js";
import Room from "./pages/room.js";
import { SocketContext, socket } from "./contexts/socket.js";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Switch>
        <Route path="/" exact>
          <IndexPage />
        </Route>
        <Route path="/room">
          <Room />
        </Route>
      </Switch>
    </SocketContext.Provider>
  );
}

export default App;
