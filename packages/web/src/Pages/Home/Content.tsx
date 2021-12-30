import React, {useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from '@monsonjeremy/react-leaflet';
import {Header, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import type {HistoricSiteType} from 'terrene-types';
import debug from 'debug';
import {server} from '../../core/server';
import {getImage} from '../../lib/getImage';

const d = debug('web.src.app.home');

export function Content() {
	const [historicSites, setHistoricSites] = useState<HistoricSiteType[]>();

	useEffect(() => {
		if (!historicSites) {
			server.fetch('historic-site/find').then(response => setHistoricSites(response.data));
		}
	}, [historicSites]);

	return (
		<MapContainer center={{lat: 46, lng: -70}} zoom={3} style={{height: '100%'}} minZoom={3}>
			<TileLayer
				attribution="&Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
				url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
			/>
			{historicSites?.map(site => {
				return (
					<Marker position={{lat: site.latitude, lng: site.longitude}} key={site.id}>
						<Popup>
							<Link to={`historic-site/${site.slug}`}>
								<Header>{site.name}</Header>
								{site.featuredImage && <Image src={getImage(site.featuredImage).thumb} />}
							</Link>
						</Popup>
					</Marker>
				);
			})}
		</MapContainer>
	);
}
