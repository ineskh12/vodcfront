import  React from "react";

import Login from "./components/login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Manage from "./Manage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      
 
          {/* <ProtectedRoute path="/"> */}
          <Route path="/">
          <Manage />
          </Route>
        {/* </ProtectedRoute> */}
      
      
      </Switch>
     
    </Router>
  );
}
