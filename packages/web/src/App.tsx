import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from '@monsonjeremy/react-leaflet';
import {Image} from 'semantic-ui-react';
import {MainMenu} from './MainMenu';
import {historicSites} from './SampleDB';

function App() {
	return (
		<div style={{height: 'calc(100% - 40px)'}}>
			<MainMenu />
			<MapContainer center={{lat: 46, lng: -70}} zoom={3} style={{height: '100%'}} minZoom={3}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{historicSites.map(site => {
					return (
						<Marker position={{lat: site.lat, lng: site.lng}} key={site.id}>
							<Popup>
								{site.name}
								<Image />
							</Popup>
						</Marker>
					);
				})}
			</MapContainer>
		</div>
	);
}

export default App;
