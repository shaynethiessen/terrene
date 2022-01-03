export type StateEntityConstructor = {
	name: string;
};

export type StateEntity = StateEntityConstructor & {
	id: string;
	version: number;
};
