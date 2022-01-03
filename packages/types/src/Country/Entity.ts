export type CountryEntityConstructor = {
	name: string;
	slug: string;
};

export type CountryEntity = CountryEntityConstructor & {
	id: string;
	version: number;
};
