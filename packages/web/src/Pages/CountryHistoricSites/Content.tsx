import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import type {HistoricSiteFindReturn} from 'terrene-types';
import debug from 'debug';
import {ContentWrapper} from '../../Layout';
import {server} from '../../core/server';
import {List} from 'semantic-ui-react';

const d = debug('web.src.app.historicSite');

export function Content() {
	const {slug} = useParams<{slug: string}>();
	const [countryHistoricSites, setCountryHistoricSites] = useState<HistoricSiteFindReturn>();

	useEffect(() => {
		server.fetch('historic-site/find', {country: slug}).then(response => {
			setCountryHistoricSites(response.data);
		});
	}, [slug]);

	if (!countryHistoricSites) return null;

	return (
		<ContentWrapper
			title={countryHistoricSites[0].country.name}
			content={
				<List bulleted>
					{countryHistoricSites?.map(historicSite => (
						<List.Item key={historicSite.id}>
							<Link to={`/historic-site/${historicSite.slug}`}>{historicSite.name}</Link>
						</List.Item>
					))}
				</List>
			}
		/>
	);
}
