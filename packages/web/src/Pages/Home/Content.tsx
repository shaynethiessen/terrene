import React from 'react';
import {MapContainer, TileLayer} from '@monsonjeremy/react-leaflet';
import debug from 'debug';
import {HistoricSiteMarkers} from './HistoricSiteMarkers';

const d = debug('web.src.app.home');

export function Content() {
	return (
		<MapContainer center={{lat: 46, lng: -70}} zoom={3} style={{height: '100%'}} minZoom={3}>
			<TileLayer
				attribution="&Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
				url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
			/>
			<HistoricSiteMarkers />
		</MapContainer>
	);
}
