import type {EntityManager} from '@mikro-orm/core';
import type {HistoricSiteAddParams} from 'terrene-types';
import slugify from 'slugify';
import {HistoricSite} from '../../Entities/HistoricSite';
import {environment} from '../../core/environment';
import {Designation} from '../../Entities/Designation';
import {Member} from '../../Entities/Member';

export const Add = {
	path: 'historic-site/add',
	action: async (params: HistoricSiteAddParams, authorization: string, em: EntityManager): Promise<void> => {
		const member = await em.findOne(Member, {id: authorization});

		if (environment.admin && member) {
			const designations = params.designations.map(designation => {
				const newDesignation = new Designation(designation);
				em.persist(newDesignation);

				return newDesignation;
			});

			const slug = slugify(params.name, {lower: true, strict: true});

			const historicSite = new HistoricSite({...params, designations, slug});

			await em.persist(historicSite);

			await em.flush();
		}
	},
};
