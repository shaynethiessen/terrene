import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import type {HistoricSiteFindReturn} from 'terrene-types';
import debug from 'debug';
import {ContentWrapper} from '../../Layout';
import {server} from '../../core/server';
import {Card, Image} from 'semantic-ui-react';
import {getImage} from '../../lib/getImage';

const d = debug('web.src.app.historicSite');

export function Content() {
	const {slug} = useParams<{slug: string}>();
	const [countryHistoricSites, setCountryHistoricSites] = useState<HistoricSiteFindReturn>();

	useEffect(() => {
		server.fetch('historic-site/find', {country: slug}).then(response => {
			setCountryHistoricSites(response.data);
		});
	}, [slug]);

	if (countryHistoricSites?.length === 0 || !countryHistoricSites)
		return (
			<ContentWrapper
				title="No historic sites found for this country."
				content={<p>New historic sites are added daily. Please check back later.</p>}
			/>
		);

	return (
		<ContentWrapper
			title={countryHistoricSites[0].country.name}
			content={
				<Card.Group>
					{countryHistoricSites?.map(historicSite => (
						<Card key={historicSite.id} link href={`/historic-site/${historicSite.slug}`}>
							{historicSite.featuredImage && <Image src={getImage(historicSite.featuredImage).thumb} />}
							<Card.Content>
								<Card.Header>{historicSite.name}</Card.Header>
								<Card.Description>
									{historicSite.state.name}, {historicSite.country.name}
								</Card.Description>
							</Card.Content>
						</Card>
					))}
				</Card.Group>
			}
		/>
	);
}
