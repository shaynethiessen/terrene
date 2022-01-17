import type {EntityManager} from '@mikro-orm/core';
import type {HistoricSiteApproveParams} from 'terrene-types';
import {ActionTypeEnum, MemberRoleEnum} from 'terrene-types';
import {HistoricSite} from '../../Entities/HistoricSite';
import {Member} from '../../Entities/Member';

export const Approve = {
	path: 'historic-site/approve',
	type: ActionTypeEnum.put,
	action: async (params: HistoricSiteApproveParams, authorization: string, em: EntityManager): Promise<void> => {
		const member = await em.findOne(Member, {id: authorization});
		if (!member) throw new Error('bad authorization');

		const historicSite = await em.findOne(HistoricSite, {id: params.id});
		if (!historicSite) throw new Error('historic site not found');

		if (member.role === MemberRoleEnum.President || member.role === MemberRoleEnum.Secretary) {
			historicSite.approved = true;

			await em.flush();
		}
	},
};
