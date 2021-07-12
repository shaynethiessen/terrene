import React from 'react';
import ReactDOM from 'react-dom';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {Marker as LMarker, icon as LIcon} from 'leaflet';
import debug from 'debug';
import App from './App';

import 'semantic-ui-css/semantic.min.css';
import 'leaflet/dist/leaflet.css';

const d = debug('app.web');

const DefaultIcon = LIcon({
	iconUrl: icon,
	shadowUrl: iconShadow,
	iconSize: [25, 41],
	iconAnchor: [10, 41],
	popupAnchor: [2, -40],
});

LMarker.prototype.options.icon = DefaultIcon;

ReactDOM.render(
	<React.StrictMode>
		{() => {
			d('Successfully started web!');
			return <App />;
		}}
	</React.StrictMode>,
	document.getElementById('root'),
);
