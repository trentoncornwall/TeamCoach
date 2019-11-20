import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Main from "./pages/Main";
import Plan from "./pages/Plan";
import NoMatch from "./pages/NoMatch";
import Teams from "./pages/Teams";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/plan/:id" component={Plan} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/teams" component={Teams} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
