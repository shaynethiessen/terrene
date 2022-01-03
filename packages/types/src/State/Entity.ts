export type StateEntityConstructor = {
	name: string;
	slug: string;
};

export type StateEntity = StateEntityConstructor & {
	id: string;
	version: number;
};
