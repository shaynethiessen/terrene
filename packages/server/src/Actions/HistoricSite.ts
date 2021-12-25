import type {EntityManager} from '@mikro-orm/core';
import {HistoricSite as HistoricSiteEntity} from '../Entities/HistoricSite';

export const HistoricSite = {
	path: 'historic-site',
	action: async ({slug}: {slug: string}, em: EntityManager) => {
		const historicSite = await em.findOne(HistoricSiteEntity, {slug});

		return {
			...historicSite,
			designations: await historicSite?.designations?.loadItems(),
		};
	},
};
