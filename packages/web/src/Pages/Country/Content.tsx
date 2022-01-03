import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import type {CountryFindReturn} from 'terrene-types';
import debug from 'debug';
import {ContentWrapper} from '../../Layout';
import {server} from '../../core/server';
import {List} from 'semantic-ui-react';

const d = debug('web.src.app.countries');

export function Content() {
	const {slug} = useParams<{slug: string}>();
	const [countriesList, setCountriesList] = useState<CountryFindReturn>();

	useEffect(() => {
		server.fetch('country/find', {slug}).then(response => {
			setCountriesList(response.data);
		});
	}, [slug]);

	return (
		<ContentWrapper
			title="Country List"
			content={
				<List bulleted>
					{countriesList?.map(country => (
						<List.Item key={country.id}>
							<Link to={`/country/${country.slug}`}>{country.name}</Link>
						</List.Item>
					))}
				</List>
			}
		/>
	);
}
