import type {EntityManager} from '@mikro-orm/core';
import type {CountryFindReturn} from 'terrene-types';
import {Country} from '../../Entities/Country';

export const Find = {
	path: 'country/find',
	action: async (params: unknown, authorization: unknown, em: EntityManager): Promise<CountryFindReturn> => {
		return em.find(Country, {});
	},
};
