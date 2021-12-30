import React, {useEffect, useState} from 'react';
import {Marker, Popup, useMap} from '@monsonjeremy/react-leaflet';
import {Link} from 'react-router-dom';
import {Header, Image} from 'semantic-ui-react';
import type {HistoricSiteType} from 'terrene-types';
import {getImage} from '../../lib/getImage';
import {server} from '../../core/server';

export function HistoricSiteMarkers() {
	const [historicSites, setHistoricSites] = useState<HistoricSiteType[]>();
	const [lat, setLat] = useState(46);
	const [lng, setLng] = useState(-70);
	const [zoom, setZoom] = useState(3);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
			setLat(position.coords.latitude);
			setLng(position.coords.longitude);
			setZoom(5);
		});
	}, [navigator.geolocation]);

	useEffect(() => {
		if (!historicSites) {
			server.fetch('historic-site/find').then(response => setHistoricSites(response.data));
		}
	}, [historicSites]);

	const map = useMap();

	map.setView({lat, lng}, zoom);

	return (
		<>
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
		</>
	);
}
