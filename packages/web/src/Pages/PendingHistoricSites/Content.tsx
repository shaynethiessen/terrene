import React, {useEffect, useState} from 'react';
import debug from 'debug';
import type {HistoricSiteFindPendingReturn} from 'terrene-types';
import {server} from '../../core/server';
import {Card, Image} from 'semantic-ui-react';
import {getImage} from '../../lib/getImage';
import {useParams} from 'react-router-dom';
import {ContentWrapper} from '../../Layout';

const d = debug('web.src.app.home');

export function Content() {
	const {memberId} = useParams<{memberId: string}>();
	const [historicSites, setHistoricSites] = useState<HistoricSiteFindPendingReturn>();

	useEffect(() => {
		if (!historicSites) {
			server.fetch('historic-site/find-pending', {}, memberId).then(response => {
				setHistoricSites(response.data);
			});
		}
	}, [historicSites]);

	return (
		<ContentWrapper
			title="Pending Historic Sites"
			content={
				<Card.Group>
					{historicSites?.map(historicSite => (
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
