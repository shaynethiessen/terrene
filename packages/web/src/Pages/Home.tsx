import React, {useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from '@monsonjeremy/react-leaflet';
import {Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import type {HistoricSiteType} from 'terrene-types';
import debug from 'debug';

const d = debug('web.src.app.home');

export function Home() {
	const [firstLoad, setFirstLoad] = useState<boolean>(true);
	const [historicSites, setHistoricSites] = useState<HistoricSiteType[]>();

	useEffect(() => {
		if (firstLoad) {
			fetch(`http://localhost:3001/historic-sites`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({}),
			})
				.then(response => response.json())
				.then(data => setHistoricSites(data))
				.catch(error => d('Request failed', error));
			setFirstLoad(false);
		}
	}, [firstLoad]);

	if (!historicSites) return <div>Loading...</div>;

	return (
		<MapContainer center={{lat: 46, lng: -70}} zoom={3} style={{height: '100%'}} minZoom={3}>
			<TileLayer
				attribution="&Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
				url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
			/>
			{historicSites.map(site => {
				return (
					<Marker position={{lat: site.latitude, lng: site.longitude}} key={site.id}>
						<Popup>
							{site.name}
							<Image />
							<Link to={`historic-site/${site.slug}`}>More Information</Link>
						</Popup>
					</Marker>
				);
			})}
		</MapContainer>
	);
}
