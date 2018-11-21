import React, { Component } from "react";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Contact from "./components/contact";
import Prezentare from "./components/prezentare";
import HomePage from "./components/home";
import TaxeTimbru from "./components/taxe";
import Organizare from "./components/organizare";
import Footer from "./components/Footer/footer";
import Rapoarte from "./components/rapoarte";
import Hotarari from "./components/Informatii/hotarari";
import Concursuri from "./components/Informatii/concursuri";
import Declaratii from "./components/Informatii/declaratii";
import InfoPublice from "./components/Informatii/infoPublice";
import Comunicate from "./components/Informatii/comunicate";
import ProtectiaDatelor from './components/Informatii/protectiaDatelor';
import ScrollToTop from 'react-scroll-up';
import ErrorPage1 from "./components/errorPage";
import NavBarComp from "./components/navbar";
import { Icon } from "react-icons-kit";
import { circleTop } from 'react-icons-kit/iconic/circleTop'
import Tooltip from '@material-ui/core/Tooltip';

const { detect } = require("detect-browser");
const browser = detect();

class App extends Component {
  render() {
    if (browser.name === 'ie' && browser.version.substr(0, 2) === '9') {
      return this.renderForNoCompatibility();
    } else return this.renderAll();
  }
  renderForNoCompatibility() {
    return (
      <div>
        <p>
          Acest site nu suporta aceasta versiune de browser. Va rugam sa
          updataţi browserul dumneavostră sau să folositi Chrome sau FireFox{" "}
        </p>
      </div>
    );
  }

  renderAll() {
    const baseUrl = process.env.PUBLIC_URL;
    return (
      <React.Fragment>
        <ScrollToTop showUnder={160}>
          <Tooltip title="Back to top">

            <Icon style={{ color: '#8c7b75' }} size={40} icon={circleTop} />
          </Tooltip>
        </ScrollToTop>
        <HashRouter basename={baseUrl} component={App}>
          <div>
            <Switch>
              <Route
                exact
                path={[
                  "/organizare",
                  "/contact",
                  "/taxe",
                  "/prezentare",
                  "/rapoarte",
                  "/hotarari",
                  "/concurs",
                  "/declaratii",
                  "/infoPublice",
                  "/comunicate",
                  "/gdpr",
                  "/"
                ]}
                component={NavBarComp}
              />
            </Switch>

            <Switch>
              <Route exact path={"/organizare"} component={Organizare} />
              <Route exact path={"/contact"} component={Contact} />
              <Route exact path={"/taxe"} component={TaxeTimbru} />
              <Route exact path={"/prezentare"} component={Prezentare} />
              <Route exact path={"/rapoarte"} component={Rapoarte} />
              <Route exact path={"/hotarari"} component={Hotarari} />
              <Route exact path={"/concurs"} component={Concursuri} />
              <Route exact path={"/declaratii"} component={Declaratii} />
              <Route exact path={"/infoPublice"} component={InfoPublice} />
              <Route exact path={"/comunicate"} component={Comunicate} />
              <Route exact path={"/gdpr"} component={ProtectiaDatelor} />
              <Route exact path={"/"} component={HomePage} />
              <Route path="*" component={ErrorPage1} status={404} />
            </Switch>

            <Switch>
              <Route
                exact
                path={[
                  "/organizare",
                  "/contact",
                  "/taxe",
                  "/prezentare",
                  "/rapoarte",
                  "/hotarari",
                  "/concurs",
                  "/declaratii",
                  "/infoPublice",
                  "/comunicate",
                  "/gdpr",
                  "/"
                ]}
                component={Footer}
              />
            </Switch>
          </div>
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default App;
