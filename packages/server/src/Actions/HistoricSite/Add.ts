import type {EntityManager} from '@mikro-orm/core';
import type {HistoricSiteType} from 'terrene-types';
import {HistoricSite} from '../../Entities/HistoricSite';

export const Find = {
	path: 'historic-site/add',
	action: async (data: HistoricSiteType, em: EntityManager) => {
		const historicSite = new HistoricSite(data);

		await em.persist(historicSite);

		await em.flush();
	},
};
