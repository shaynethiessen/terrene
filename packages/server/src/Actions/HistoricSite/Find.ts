import type {EntityManager} from '@mikro-orm/core';
import {HistoricSite} from '../../Entities/HistoricSite';

export const Find = {
	path: 'historic-site/find',
	action: async (unused: unknown, em: EntityManager) => em.find(HistoricSite, {}),
};
