import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../src/Pages/Home'
import quote from '../src/Pages/quote'
import dashboard from '../src/Pages/Dashboard'
import Navigation from '../src/MiniComponents/Navigation'

export default function BasicExample() {
  return (
    <Router>
     
      <div>
      
      {/* <Navigation home='/home' about='/about' dashboard='/dasboard' quote='/quote'/> */}
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard" component={dashboard}></Route>
          <Route path="/quote" component={quote}></Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.


function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}


