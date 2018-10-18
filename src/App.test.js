import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvaoY8K8Odlq7GTN_ssHiFelOUR0VFOTg&callback=initMap"
  type="text/javascript"></script>
  
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
