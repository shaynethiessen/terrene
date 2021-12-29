import type {EntityManager} from '@mikro-orm/core';
import {Member} from '../../Entities/Member';

export const Authenticate = {
	path: 'member/authenticate',
	action: async ({memberId}: {memberId: string}, em: EntityManager) => {
		return em.find(Member, {id: memberId});
	},
};
