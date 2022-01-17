import type {EntityManager} from '@mikro-orm/core';
import type {MemberAuthenticateReturn} from 'terrene-types';
import {ActionTypeEnum} from 'terrene-types';
import {Member} from '../../Entities/Member';

export const Authenticate = {
	path: 'member/authenticate',
	type: ActionTypeEnum.post,
	action: async (params: unknown, authorization: string, em: EntityManager): Promise<MemberAuthenticateReturn> => {
		return em.findOne(Member, {id: authorization});
	},
};
