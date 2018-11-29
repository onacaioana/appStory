import React, { Component } from "react";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Prezentare from "./pages/prezentare";
import HomePage from "./pages/home";
import TaxeTimbru from "./pages/CalculatorTaxe";
import Organizare from "./pages/organizare";
import Footer from "./components/Footer/FooterComponent";
import Rapoarte from "./pages/rapoarte";
import Hotarari from "./pages/hotarari";
import Concursuri from "./pages/concursuri";
import Competente from "./pages/competente";
import Declaratii from "./pages/declaratii";
import InfoPublice from "./pages/infoPublice";
import Comunicate from "./pages/comunicate";
import ProtectiaDatelor from './pages/protectiaDatelor';
import ScrollToTop from 'react-scroll-up';
import ErrorPage1 from "./pages/errorPage";
import NavBarComp from "./components/Header/HeaderNavigation";
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
                  "/competente",
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
              <Route exact path={"/competente"} component={Competente} />
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
                  "/comunicate",
                  "/competente",
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
