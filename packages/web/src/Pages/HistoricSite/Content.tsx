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
		server.fetch('historic-site/find-one', {slug}).then(data => {
			setHistoricSiteInfo(data);
		});
	}, [slug]);

	if (!historicSiteInfo) return <div>Loading...</div>;

	return (
		<ContentWrapper
			title={historicSiteInfo.name}
			content={<>{historicSiteInfo.content}</>}
			attribution={historicSiteInfo.attribution}
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
