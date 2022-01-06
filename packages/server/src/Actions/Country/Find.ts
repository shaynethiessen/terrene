import type {EntityManager} from '@mikro-orm/core';
import type {CountryFindReturn} from 'terrene-types';
import {Country} from '../../Entities/Country';

export const Find = {
	path: 'country/find',
	action: async (params: unknown, authorization: unknown, em: EntityManager): Promise<CountryFindReturn> => {
		const countries = await em.find(Country, {}, {});
		return countries.sort((a, b) => {
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
