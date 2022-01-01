import type {EntityManager} from '@mikro-orm/core';
import type {HistoricSiteFindReturn} from 'terrene-types';
import {HistoricSite} from '../../Entities/HistoricSite';

export const Find = {
	path: 'historic-site/find',
	action: async (params: unknown, authorization: unknown, em: EntityManager): Promise<HistoricSiteFindReturn> => {
		const historicSites = await em.find(HistoricSite, {});
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
