import type {EntityManager} from '@mikro-orm/core';
import type {HistoricSiteFindOneParams, HistoricSiteFindOneReturn} from 'terrene-types';
import {HistoricSite as HistoricSiteEntity} from '../../Entities/HistoricSite';

export const FindOne = {
	path: 'historic-site/find-one',
	action: async (params: HistoricSiteFindOneParams, authorization: unknown, em: EntityManager): Promise<HistoricSiteFindOneReturn> => {
		const historicSite = await em.findOne(HistoricSiteEntity, {slug: params.slug});
		if (!historicSite) throw new Error('historic site not found');

		return {
			...historicSite,
			designations: await historicSite.designations.loadItems(),
		};
	},
};
