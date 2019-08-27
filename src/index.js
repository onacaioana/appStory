import 'babel-polyfill'
import 'es5-shim'
import 'es6-shim'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import './css/index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'core-js/es6/map';
import 'core-js/es6/set';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
