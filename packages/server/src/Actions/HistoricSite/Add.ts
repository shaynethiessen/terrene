import type {EntityManager} from '@mikro-orm/core';
import type {HistoricSiteTypeAdd} from 'terrene-types';
import slugify from 'slugify';
import {HistoricSite} from '../../Entities/HistoricSite';
import {environment} from '../../core/environment';
import {Designation} from '../../Entities/Designation';
import {Member} from '../../Entities/Member';

export const Add = {
	path: 'historic-site/add',
	action: async (data: HistoricSiteTypeAdd, em: EntityManager) => {
		const member = await em.findOne(Member, {id: data.memberId});

		if (environment.admin && member) {
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
