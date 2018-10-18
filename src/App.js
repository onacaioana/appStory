import React, { Component } from 'react';
import NavBar from './components/navbar'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './components/contact';
import Prezentare from './components/prezentare';
import Title from './components/title';
import HomePage from './components/home';
import TaxeTimbru from './components/taxe';
import Organizare from './components/organizare';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Title/>
        <BrowserRouter>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/organizare" component={Organizare} />
            <Route path="/taxe" component={TaxeTimbru} />
            <Route path="/prezentare" component={Prezentare} />
            <Route path="/organizare#test1" component={Organizare} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>

      </React.Fragment>
    );
  }
}

export default App;
