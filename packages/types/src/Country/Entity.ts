import type {StateEntity} from '../State';

export type CountryEntityConstructor = {
	name: string;
	state: StateEntity;
};

export type CountryEntity = CountryEntityConstructor & {
	id: string;
	version: number;
};
