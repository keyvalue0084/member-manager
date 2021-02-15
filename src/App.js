import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ProfilePage,UserListPage,LoginPage, UserRegistPage} from "./pages";
import HomePage from "./HomePage.react";


import "tabler-react/dist/Tabler.css";

type Props = {||};

function App(props: Props): React.Node {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />         
          <Route exact path="/userlist" component={UserListPage} />         
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/userregist" component={UserRegistPage} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;