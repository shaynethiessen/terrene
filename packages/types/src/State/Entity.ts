import type {CountryEntity} from '../Country';

export type StateEntityConstructor = {
	name: string;
	country: CountryEntity;
};

export type StateEntity = StateEntityConstructor & {
	id: string;
	version: number;
};
