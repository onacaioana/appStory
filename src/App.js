
import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contact from "./components/contact";
import Prezentare from "./components/prezentare";
import Title from "./components/title";
import HomePage from "./components/home";
import TaxeTimbru from "./components/taxe";
import Organizare from "./components/organizare";
import Anunturi from "./components/Anunturi/anunturi";
import Meniu from './components/meniu';
import Footer from './components/Footer/footer';
class App extends Component {
  render() {
    return (
      <React.Fragment>

        <Meniu />
        <Title />
        <BrowserRouter>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/organizare" component={Organizare} />
            <Route path="/taxe" component={TaxeTimbru} />
            <Route path="/prezentare" component={Prezentare} />
            <Route path="/organizare#test1" component={Organizare} />
            <Route path="/informatii/anunturi" component={Anunturi} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
