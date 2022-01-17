import {icon as LIcon} from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import React, {useEffect, useState} from 'react';
import {Marker, Popup, useMap} from 'react-leaflet';
import {Card, Header, Image} from 'semantic-ui-react';
import type {HistoricSiteEntity} from 'terrene-types';
import {server} from '../../../core/server';
import {getImage} from '../../../lib/getImage';
import historicIcon from './historicIcon.png';
import userIcon from './userIcon.png';

export function HistoricSiteMarkers() {
	const [historicSites, setHistoricSites] = useState<HistoricSiteEntity[]>();
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
	});

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
			{historicSites?.map(historicSite => {
				return (
					<Marker position={{lat: historicSite.latitude, lng: historicSite.longitude}} key={historicSite.id} icon={HistoricSiteIcon}>
						<Popup>
							<Card key={historicSite.id} link href={`/historic-site/${historicSite.slug}`}>
								{historicSite.featuredImage && <Image src={getImage(historicSite.featuredImage).thumb} />}
								<Card.Content>
									<Card.Header>{historicSite.name}</Card.Header>
									<Card.Description>
										{historicSite.state.name}, {historicSite.country.name}
									</Card.Description>
								</Card.Content>
							</Card>
						</Popup>
					</Marker>
				);
			})}
		</>
	);
}
