import type {EntityManager} from '@mikro-orm/core';
import {MemberGetTeamReturn, MemberRoleEnum} from 'terrene-types';
import {Member} from '../../Entities/Member';
import {ActionTypeEnum} from 'terrene-types';

export const GetTeam = {
	path: 'member/get-team',
	type: ActionTypeEnum.post,
	action: async (params: unknown, authorization: unknown, em: EntityManager): Promise<MemberGetTeamReturn> =>
		em.find(Member, {role: {$ne: MemberRoleEnum.Member}}),
};
