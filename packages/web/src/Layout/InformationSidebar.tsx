import React from 'react';
import type {CountryEntity, DesignationEntity, StateEntity} from 'terrene-types';
import {Card, Icon} from 'semantic-ui-react';

interface Props {
	country: CountryEntity;
	state: StateEntity;
	longitude: number;
	latitude: number;
	activePeriodStart: number;
	activePeriodEnd?: number | null;
	designations: DesignationEntity[];
	location: string;
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
			<Card color="green">
				<Card.Content>
					<Card.Header>Actions</Card.Header>
				</Card.Content>
				<Card.Content>
					<a href={props.location} target="_blank" rel="noreferrer">
						<Icon name="map" bordered inverted color="black" size="large" />
					</a>
				</Card.Content>
			</Card>
			<Card color="yellow">
				<Card.Content>
					<Card.Header>Quick Facts</Card.Header>
				</Card.Content>
				<Card.Content>
					<Card.Description>Active: {`${formatYear(props.activePeriodStart)} - ${formatYear(props.activePeriodEnd)}`}</Card.Description>
					<Card.Description>Location: {`${props.state.name}, ${props.country.name}`}</Card.Description>
					<Card.Description>Longitude: {props.longitude}</Card.Description>
					<Card.Description>Latitude: {props.latitude}</Card.Description>
				</Card.Content>
			</Card>
			{props.designations.map(designation => {
				return (
					<Card key={designation.type} color="brown">
						<Card.Content>
							<Card.Header>{designation.type}</Card.Header>
						</Card.Content>
						<Card.Content>
							<Card.Description>Official Name: {designation.officialName}</Card.Description>
							<Card.Description>Designated: {designation.year}</Card.Description>
						</Card.Content>
					</Card>
				);
			})}
		</Card.Group>
	);
}
