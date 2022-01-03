export type CountryEntityConstructor = {
	name: string;
};

export type CountryEntity = CountryEntityConstructor & {
	id: string;
	version: number;
};
