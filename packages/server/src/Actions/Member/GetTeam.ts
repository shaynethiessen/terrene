import type {EntityManager} from '@mikro-orm/core';
import {RolesEnum} from 'terrene-types';
import {Member} from '../../Entities/Member';

export const GetTeam = {
	path: 'member/get-team',
	action: async (unused: unknown, em: EntityManager) => em.find(Member, {role: {$ne: RolesEnum.Member}}),
};
