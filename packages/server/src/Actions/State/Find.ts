import type {EntityManager} from '@mikro-orm/core';
import type {StateFindReturn} from 'terrene-types';
import {State} from '../../Entities/State';
import {ActionTypeEnum} from 'terrene-types';

export const Find = {
	path: 'state/find',
	type: ActionTypeEnum.post,
	action: async (params: unknown, authorization: unknown, em: EntityManager): Promise<StateFindReturn> => {
		const states = await em.find(State, {}, {});
		return states.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
	},
};
