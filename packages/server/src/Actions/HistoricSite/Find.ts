import type {EntityManager} from '@mikro-orm/core';
import type {HistoricSiteFindParams, HistoricSiteFindReturn} from 'terrene-types';
import {HistoricSite} from '../../Entities/HistoricSite';
import {Country} from '../../Entities/Country';

export const Find = {
	path: 'historic-site/find',
	action: async (params: HistoricSiteFindParams, authorization: unknown, em: EntityManager): Promise<HistoricSiteFindReturn> => {
		let findParams;
		if (params?.country) {
			const countryId = (await em.findOne(Country, {slug: params.country}))?.id;
			findParams = {country: countryId};
		}
		const historicSites = await em.find(HistoricSite, findParams ? findParams : {});

		return Promise.all(
			historicSites.map(async historicSite => {
				return {
					...historicSite,
					designations: await historicSite.designations.loadItems(),
				};
			}),
		);
	},
};
