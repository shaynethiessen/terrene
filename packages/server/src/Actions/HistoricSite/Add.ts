import type {EntityManager} from '@mikro-orm/core';
import type {HistoricSiteType} from 'terrene-types';
import slugify from 'slugify';
import {HistoricSite} from '../../Entities/HistoricSite';
import {environment} from '../../core/environment';
import {Designation} from '../../Entities/Designation';

export const Add = {
	path: 'historic-site/add',
	action: async (data: HistoricSiteType, em: EntityManager) => {
		// environment variable must be set, before we will run migrations -STT
		if (environment.admin) {
			const designations = data.designations.map(designation => {
				const newDesignation = new Designation(designation);
				em.persist(newDesignation);

				return newDesignation;
			});

			const slug = slugify(data.name, {lower: true, strict: true});

			const historicSite = new HistoricSite({...data, designations, slug});

			await em.persist(historicSite);

			await em.flush();
		}
	},
};
