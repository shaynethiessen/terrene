import React, {useEffect, useState} from 'react';
import {Marker, Popup, useMap} from '@monsonjeremy/react-leaflet';
import {Link} from 'react-router-dom';
import {Header, Image} from 'semantic-ui-react';
import type {HistoricSiteType} from 'terrene-types';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {icon as LIcon} from 'leaflet';
import userIcon from './userIcon.png';
import historicIcon from './historicIcon.png';
import {server} from '../../core/server';
import {getImage} from '../../lib/getImage';

export function HistoricSiteMarkers() {
	const [historicSites, setHistoricSites] = useState<HistoricSiteType[]>();
	const [lat, setLat] = useState(46);
	const [lng, setLng] = useState(-70);
	const [zoom, setZoom] = useState(3);
	const [userLocationEnabled, setUserLocationEnabled] = useState(false);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
			setLat(position.coords.latitude);
			setLng(position.coords.longitude);
			setZoom(5);
			setUserLocationEnabled(true);
		});
	}, [navigator.geolocation]);

	useEffect(() => {
		if (!historicSites) {
			server.fetch('historic-site/find').then(response => setHistoricSites(response.data));
		}
	}, [historicSites]);

	const map = useMap();

	map.setView({lat, lng}, zoom);

	const UserIcon = LIcon({
		iconUrl: userIcon,
		shadowUrl: iconShadow,
		iconSize: [25, 41],
		iconAnchor: [10, 41],
		popupAnchor: [2, -40],
	});

	const HistoricSiteIcon = LIcon({
		iconUrl: historicIcon,
		shadowUrl: iconShadow,
		iconSize: [25, 41],
		iconAnchor: [10, 41],
		popupAnchor: [2, -40],
	});

	return (
		<>
			{userLocationEnabled && (
				<Marker position={{lat, lng}} icon={UserIcon}>
					<Popup>
						<Header>My Location</Header>
						<Image src={userIcon} />
					</Popup>
				</Marker>
			)}
			{historicSites?.map(site => {
				return (
					<Marker position={{lat: site.latitude, lng: site.longitude}} key={site.id} icon={HistoricSiteIcon}>
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
