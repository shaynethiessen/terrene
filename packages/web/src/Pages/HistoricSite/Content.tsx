import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import type {HistoricSiteType} from 'terrene-types';
import debug from 'debug';
import {ContentWrapper, InformationSidebar} from '../../Layout';
import {server} from '../../core/server';

const d = debug('web.src.app.historicSite');

export function Content() {
	const {slug} = useParams<{slug: string}>();
	const [historicSiteInfo, setHistoricSiteInfo] = useState<HistoricSiteType>();

	useEffect(() => {
		server.fetch('historic-site/find-one', {slug}).then(response => {
			setHistoricSiteInfo(response.data);
		});
	}, [slug]);

	if (!historicSiteInfo) return <div>Loading...</div>;

	return (
		<ContentWrapper
			title={historicSiteInfo.name}
			content={<p style={{whiteSpace: 'pre-line'}}>{historicSiteInfo.content}</p>}
			source={historicSiteInfo.source}
			featuredImage={historicSiteInfo.featuredImage}
			sidebar={
				<InformationSidebar
					latitude={historicSiteInfo.latitude}
					longitude={historicSiteInfo.longitude}
					activePeriodStart={historicSiteInfo.activePeriodStart}
					activePeriodEnd={historicSiteInfo.activePeriodEnd}
					designations={historicSiteInfo.designations}
				/>
			}
		/>
	);
}
