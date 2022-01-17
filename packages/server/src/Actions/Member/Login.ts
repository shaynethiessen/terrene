import type {EntityManager} from '@mikro-orm/core';
import {compare} from 'bcryptjs';
import type {MemberLoginParams, MemberLoginReturn} from 'terrene-types';
import {ActionTypeEnum} from 'terrene-types';
import {Member} from '../../Entities/Member';

export const Login = {
	path: 'member/login',
	type: ActionTypeEnum.post,
	action: async (params: MemberLoginParams, authorization: unknown, em: EntityManager): Promise<MemberLoginReturn> => {
		const member = await em.findOne(Member, {email: params.email.toLowerCase()});
		if (!member) throw new Error('member does not exist');

		if (await compare(params.password, member.password)) {
			return {...member, password: ''};
		}

		throw new Error('invalid password');
	},
};
