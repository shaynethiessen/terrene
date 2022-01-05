import type {EntityManager} from '@mikro-orm/core';
import type {StateFindReturn} from 'terrene-types';
import {State} from '../../Entities/State';

export const Find = {
	path: 'state/find',
	action: async (params: unknown, authorization: unknown, em: EntityManager): Promise<StateFindReturn> => {
		return em.find(State, {});
	},
};
