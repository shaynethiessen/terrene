import React, {useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from '@monsonjeremy/react-leaflet';
import {Image} from 'semantic-ui-react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import debug from 'debug';
import {MainMenu} from './MainMenu';
import type {HistoricSite} from './Types';

const d = debug('web.src.app');

function App() {
	const [historicSites, setHistoricSites] = useState<HistoricSite[]>();

	useEffect(() => {
		fetch(`http://localhost:3001/historic-sites`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(''),
		})
			.then(response => response.json())
			.then(data => setHistoricSites(data))
			.catch(error => d('Request failed', error));
	});

	if (!historicSites) return <div>Loading...</div>;

	return (
		<BrowserRouter>
			<div style={{height: 'calc(100% - 40px)'}}>
				<MainMenu />
				<Switch>
					<Route exact path="/">
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
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
