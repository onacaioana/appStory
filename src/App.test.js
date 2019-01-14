import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
  
it('renders without crashing', () => {
  const div1 = 'div';
  const div = document.createElement(div1);
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
