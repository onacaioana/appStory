
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contact from "./components/contact";
import Prezentare from "./components/prezentare";
import HomePage from "./components/home";
import TaxeTimbru from "./components/taxe";
import Organizare from "./components/organizare";
import Meniu from './components/meniu';
import Footer from './components/Footer/footer';
import Rapoarte from './components/rapoarte';
import Hotarari from './components/hotarari';
import Concursuri from './components/concursuri';
import Declaratii from './components/declaratii';
import InfoPublice from "./components/infoPublice";
import Comunicate from "./components/comunicate";
const { detect } = require('detect-browser');
const browser = detect();


class App extends Component {
  render() {
    if (browser.name === 'ie') {
      return this.renderForNoCompatibility();
    }
    else return this.renderAll();
  }
  renderForNoCompatibility() {
    return (
      <div>
        <p>Acest site nu suporta aceasta versiune de browser. Va rugam sa updataţi browserul dumneavostră sau să folositi Chorme sau FireFox </p>
      </div>
    )
  }

  renderAll() {
    return (
      <React.Fragment>

        <Meniu />
        <BrowserRouter>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/organizare" component={Organizare} />
            <Route path="/taxe" component={TaxeTimbru} />
            <Route path="/prezentare" component={Prezentare} />
            <Route path="/rapoarte" component={Rapoarte} />
            <Route path="/hotarari" component={Hotarari} />
            <Route path="/concurs" component={Concursuri} />
            <Route path="/declaratii" component={Declaratii} />
            <Route path="/infoPublice" component={InfoPublice} />
            <Route path="/comunicate" component={Comunicate} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
