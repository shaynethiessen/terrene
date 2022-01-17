import type {EntityManager} from '@mikro-orm/core';
import type {HistoricSiteFindPendingReturn} from 'terrene-types';
import {HistoricSite} from '../../Entities/HistoricSite';
import {ActionTypeEnum, MemberRoleEnum} from 'terrene-types';
import {Member} from '../../Entities/Member';

export const Find = {
	path: 'historic-site/find-pending',
	type: ActionTypeEnum.post,
	action: async (params: unknown, authorization: string, em: EntityManager): Promise<HistoricSiteFindPendingReturn> => {
		const member = await em.findOne(Member, {id: authorization});
		if (!member) throw new Error('bad authorization');

		if (member.role === MemberRoleEnum.President) {
			const historicSites = await em.find(HistoricSite, {approved: false});

			return Promise.all(
				historicSites.map(async historicSite => {
					return {
						...historicSite,
						designations: await historicSite.designations.loadItems(),
					};
				}),
			);
		}
		if (!member) throw new Error('bad user role');
	},
};
