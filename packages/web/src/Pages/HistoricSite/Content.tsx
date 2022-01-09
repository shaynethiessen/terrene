import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import type {HistoricSiteFindOneReturn} from 'terrene-types';
import debug from 'debug';
import {ContentWrapper, InformationSidebar} from '../../Layout';
import {server} from '../../core/server';

const d = debug('web.src.app.historicSite');

export function Content() {
	const {slug} = useParams<{slug: string}>();
	const [historicSiteInfo, setHistoricSiteInfo] = useState<HistoricSiteFindOneReturn>();

	useEffect(() => {
		server.fetch('historic-site/find-one', {slug}).then(response => {
			setHistoricSiteInfo(response.data);
		});
	}, [slug]);

	return (
		<ContentWrapper
			title={historicSiteInfo?.name || ''}
			content={<p style={{whiteSpace: 'pre-line'}}>{historicSiteInfo?.content}</p>}
			source={historicSiteInfo?.source}
			featuredImage={historicSiteInfo?.featuredImage}
			sidebar={
				historicSiteInfo?.latitude ? (
					<InformationSidebar
						country={historicSiteInfo?.country}
						state={historicSiteInfo?.state}
						latitude={historicSiteInfo?.latitude}
						longitude={historicSiteInfo?.longitude}
						activePeriodStart={historicSiteInfo?.activePeriodStart}
						activePeriodEnd={historicSiteInfo?.activePeriodEnd}
						designations={historicSiteInfo?.designations}
						location={`https://www.google.com/maps/place/${historicSiteInfo?.latitude},${historicSiteInfo?.longitude}`}
					/>
				) : undefined
			}
		/>
	);
}
