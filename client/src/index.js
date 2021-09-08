import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./state/store";
import { Provider } from "react-redux";
import SocketConnection from "./socket/connection";

import App from "./views/App";

const reduxStore = configureStore(window.RDUX_INITIAL_DATA);

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <App />
      <SocketConnection />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// function App_old() {
//   return (
//     <SocketContext.Provider value={socket}>
//       <h2>Well come to the market.</h2>
//       <Switch>
//         <Route path="/" exact>
//           <IndexPage />
//         </Route>
//         <Route path="/room/:id">
//           <Room />
//         </Route>
//         <Route path="/shop">
//           <Shop />
//         </Route>
//       </Switch>
//     </SocketContext.Provider>
//   );
// }
