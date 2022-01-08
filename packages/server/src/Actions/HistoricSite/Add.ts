import type {EntityManager} from '@mikro-orm/core';
import type {HistoricSiteAddParams} from 'terrene-types';
import slugify from 'slugify';
import {HistoricSite} from '../../Entities/HistoricSite';
import {Designation} from '../../Entities/Designation';
import {Member} from '../../Entities/Member';
import {Country} from '../../Entities/Country';
import {State} from '../../Entities/State';
import {ActionTypeEnum} from 'terrene-types';

export const Add = {
	path: 'historic-site/add',
	type: ActionTypeEnum.put,
	action: async (params: HistoricSiteAddParams, authorization: string, em: EntityManager): Promise<void> => {
		const member = await em.findOne(Member, {id: authorization});
		const country = await em.findOne(Country, {id: params.country.id});
		const state = await em.findOne(State, {id: params.state.id});

		if (member && country && state) {
			const designations = params.designations.map(designation => {
				const newDesignation = new Designation(designation);
				em.persist(newDesignation);

				return newDesignation;
			});

			const slug = slugify(params.name, {lower: true, strict: true});

			const historicSite = new HistoricSite({...params, designations, slug, country, state});

			await em.persist(historicSite);

			await em.flush();
		}
	},
};
