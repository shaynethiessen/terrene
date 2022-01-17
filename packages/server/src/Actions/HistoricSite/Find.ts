import type {EntityManager} from '@mikro-orm/core';
import type {HistoricSiteFindParams, HistoricSiteFindReturn} from 'terrene-types';
import {ActionTypeEnum} from 'terrene-types';
import {Country} from '../../Entities/Country';
import {HistoricSite} from '../../Entities/HistoricSite';

export const Find = {
	path: 'historic-site/find',
	type: ActionTypeEnum.post,
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
