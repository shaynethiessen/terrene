import type {EntityManager} from '@mikro-orm/core';
import {HistoricSite} from '../Entities/HistoricSite';

export const HistoricSites = {
	path: 'historic-sites',
	action: async (unused: unknown, em: EntityManager) => em.find(HistoricSite, {}),
};
