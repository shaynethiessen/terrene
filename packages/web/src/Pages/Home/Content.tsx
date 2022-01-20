import debug from 'debug';
import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import {HistoricSiteMarkers} from './Components/HistoricSiteMarkers';

const d = debug('terrene.web.Pages.Home.Content');

export function Content() {
	return (
		<MapContainer
			center={{lat: 46, lng: -70}}
			zoom={3}
			style={{height: '100%'}}
			minZoom={2}
			maxBounds={[
				[-90, -Infinity],
				[90, Infinity],
			]}
			maxBoundsViscosity={1}
			worldCopyJump
		>
			<TileLayer
				attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
				url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
			/>
			<HistoricSiteMarkers />
		</MapContainer>
	);
}
