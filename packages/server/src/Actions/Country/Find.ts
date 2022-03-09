import type {EntityManager} from '@mikro-orm/core';
import type {CountryFindParams, CountryFindReturn} from 'terrene-types';
import {ActionTypeEnum} from 'terrene-types';
import {Country} from '../../Entities/Country';

export const Find = {
	path: 'country/find',
	type: ActionTypeEnum.post,
	action: async (params: CountryFindParams, authorization: unknown, em: EntityManager): Promise<CountryFindReturn> => {
		let countries = await em.find(Country, {}, {populate: true});
		if (params?.withHistoricSites) {
			countries = countries.filter(country => country.historicSites.length > 0);
		}

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
