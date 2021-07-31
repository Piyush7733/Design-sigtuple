import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from './LandingPage';
import BlogLists from "./BlogLists";
import Careers from "./Careers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Helmet} from "react-helmet";

const App = () =>{
  return (
    <div className="main">
      <Helmet>
        <script
          src="/assets/js/gradient.js"
        />
      </Helmet>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
          <LandingPage />
          </Route>
          <Route path="/blogs" exact>
          <BlogLists />
          </Route>
          <Route path="/careers" exact>
          <Careers />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
