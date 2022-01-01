export type MigrationEntityConstructor = {
	name: string;
	index: number;
	success: boolean;
};

export type MigrationEntity = MigrationEntityConstructor & {
	id: string;
};
