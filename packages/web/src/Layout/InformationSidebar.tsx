import React from 'react';

interface Props {
	longitude: number;
	latitude: number;
}

export function InformationSidebar(props: Props) {
	return (
		<>
			<p>Longitude: {props.longitude}</p>
			<p>Latitude: {props.latitude}</p>
		</>
	);
}
