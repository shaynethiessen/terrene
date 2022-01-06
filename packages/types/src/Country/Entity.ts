export type CountryEntityConstructor = {
	name: string;
	slug: string;
	code: string;
};

export type CountryEntity = CountryEntityConstructor & {
	id: string;
	version: number;
};
