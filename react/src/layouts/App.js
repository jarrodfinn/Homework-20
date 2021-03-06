import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "./App.css";

/* Components */
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

/* Pages */
import Welcome from "../pages/Welcome";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Submitted from "../pages/Submitted";

export default function App() {
  return (
    <>
      {/* Tells React Router that we're using it in the browser */}
      <BrowserRouter>
        {/* Allow us to show the navigation for every page */}
        <Navigation />
        <Switch>
          <Container>
            <Route path ="/" exact name="Home" component={Welcome} />
            <Route path="/about" name="About" component={About} />
            <Route path="/contact" name="Contact" component={Contact} />
            <Route path="/portfolio" name="Portfolio" component={Portfolio} />
            <Route path="/submitted" name="Submitted" component={Submitted} />
          </Container>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
