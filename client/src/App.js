import React from "react";
import { Route, Switch } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import Room from "./pages/room";
import { SocketContext, socket } from "./contexts/socket";
import Shop from "./pages/shop";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Switch>
        <Route path="/" exact>
          <IndexPage />
        </Route>
        <Route path="/room/:id">
          <Room />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
    </SocketContext.Provider>
  );
}

export default App;
