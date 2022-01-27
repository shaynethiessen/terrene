import debug from 'debug';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Card, Flag, FlagNameValues} from 'semantic-ui-react';
import type {CountryFindReturn} from 'terrene-types';
import {ContentWrapper} from '../../Layout';
import {server} from '../../core/server';

const d = debug('terrene.web.Pages.Country.Content');

export function Content() {
	const {slug} = useParams<{slug: string}>();
	const [countriesList, setCountriesList] = useState<CountryFindReturn>();

	useEffect(() => {
		server.fetch('country/find', {withHistoricSites: true}).then(response => {
			setCountriesList(response.data);
		});
	}, [slug]);

	return (
		<ContentWrapper
			title="Country List"
			content={
				<Card.Group>
					{countriesList?.map(country => (
						<Card key={country.id} link href={`/country/${country.slug}`}>
							<Card.Content>
								<Flag name={country.code as FlagNameValues} style={{float: 'right'}} />
								<Card.Header>{country.name}</Card.Header>
								<Card.Description>{country.description}</Card.Description>
							</Card.Content>
						</Card>
					))}
				</Card.Group>
			}
		/>
	);
}
