import React from 'react';
import ReactDOM from 'react-dom';
import debug from 'debug';
import App from './App';

// import 'semantic-ui-css/semantic.min.css';
import 'leaflet/dist/leaflet.css';
import 'react-toastify/dist/ReactToastify.css';

const d = debug('app.web');

ReactDOM.render(<App />, document.getElementById('root'));
