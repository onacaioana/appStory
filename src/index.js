
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'core-js/es6/map';
import 'core-js/es6/set';
/* import "ie-array-find-polyfill";
import 'core-js/es6/typed';
*/

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

 ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
