import debug from 'debug';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import ReactDOM from 'react-dom';

import 'react-toastify/dist/ReactToastify.css';
import App from './App';

const d = debug('terrene.web');

ReactDOM.render(<App />, document.getElementById('root'));
