import React, {useEffect, useState} from 'react';
import debug from 'debug';
import type {HistoricSiteFindPendingReturn} from 'terrene-types';
import {server} from '../../core/server';
import {Button, Card, Image} from 'semantic-ui-react';
import {getImage} from '../../lib/getImage';
import {useParams} from 'react-router-dom';
import {ContentWrapper} from '../../Layout';
import {toast} from 'react-toastify';

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

	function approve(id: string) {
		server.fetch('historic-site/approve', {id}, memberId, 'PUT').then(() => {
			toast.success('Historic site approved!');
		});
	}

	return (
		<ContentWrapper
			title="Pending Historic Sites"
			content={
				<Card.Group>
					{historicSites?.map(historicSite => (
						<Card key={historicSite.id}>
							<Card link href={`/historic-site/${historicSite.slug}`}>
								{historicSite.featuredImage && <Image src={getImage(historicSite.featuredImage).thumb} />}
								<Card.Content>
									<Card.Header>{historicSite.name}</Card.Header>
									<Card.Description>
										{historicSite.state.name}, {historicSite.country.name}
									</Card.Description>
								</Card.Content>
							</Card>
							<Card.Content>
								<Button color="green" onClick={() => approve(historicSite.id)}>
									Approve
								</Button>
							</Card.Content>
						</Card>
					))}
				</Card.Group>
			}
		/>
	);
}
