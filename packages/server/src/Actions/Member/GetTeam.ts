import type {EntityManager} from '@mikro-orm/core';
import {MemberGetTeamReturn, MemberRoleEnum} from 'terrene-types';
import {Member} from '../../Entities/Member';

export const GetTeam = {
	path: 'member/get-team',
	action: async (params: unknown, authorization: unknown, em: EntityManager): Promise<MemberGetTeamReturn> =>
		em.find(Member, {role: {$ne: MemberRoleEnum.Member}}),
};
