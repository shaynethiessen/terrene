import React from 'react';
import type {DesignationType} from 'terrene-types';
import {Card} from 'semantic-ui-react';

interface Props {
	longitude: number;
	latitude: number;
	activePeriodStart: number;
	activePeriodEnd?: number | null;
	designations: DesignationType[];
}

function formatYear(date?: number | null) {
	if (!date) {
		return 'Present';
	}
	if (date < 0) {
		return `${date * -1} BCE`;
	}

	return date.toString();
}

export function InformationSidebar(props: Props) {
	return (
		<Card.Group>
			<Card color="yellow">
				<Card.Content>
					<Card.Header>Quick Facts</Card.Header>
					<Card.Description>Active: {`${formatYear(props.activePeriodStart)} - ${formatYear(props.activePeriodEnd)}`}</Card.Description>
					<Card.Description>Longitude: {props.longitude}</Card.Description>
					<Card.Description>Latitude: {props.latitude}</Card.Description>
				</Card.Content>
			</Card>
			{props.designations.map(designation => {
				return (
					<Card key={designation.type} color="green">
						<Card.Content>
							<Card.Header>{designation.type}</Card.Header>
							<Card.Description>Official Name: {designation.officialName}</Card.Description>
							<Card.Description>Designated: {designation.year}</Card.Description>
						</Card.Content>
					</Card>
				);
			})}
		</Card.Group>
	);
}
