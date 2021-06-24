import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {Marker as LMarker, icon as LIcon} from 'leaflet';

import 'semantic-ui-css/semantic.min.css'
import 'leaflet/dist/leaflet.css';

let DefaultIcon = LIcon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

LMarker.prototype.options.icon = DefaultIcon;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
