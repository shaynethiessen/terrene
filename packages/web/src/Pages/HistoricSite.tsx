import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import type {HistoricSite as HistoricSiteType} from 'terrene-types';
import debug from 'debug';
import {ContentWrapper} from '../Layout';

const d = debug('web.src.app.historicSite');

export function HistoricSite() {
	const {slug} = useParams<{slug: string}>();
	const [historicSiteInfo, setHistoricSiteInfo] = useState<HistoricSiteType>();

	useEffect(() => {
		fetch(`http://localhost:3001/historic-site`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({slug}),
		})
			.then(response => response.json())
			.then(data => setHistoricSiteInfo(data))
			.catch(error => d('Request failed', error));
	}, [slug]);

	if (!historicSiteInfo) return <div>Loading...</div>;

	return <ContentWrapper title={historicSiteInfo.name} content={historicSiteInfo.content} />;
}
