export type CountryEntityConstructor = {
	name: string;
	slug: string;
	code: string;
	description: string;
};

export type CountryEntity = CountryEntityConstructor & {
	id: string;
	version: number;
};
