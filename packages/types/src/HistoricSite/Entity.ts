import type {DesignationEntity} from '../Designation';

export type HistoricSiteEntityConstructor = {
	latitude: number;
	longitude: number;
	name: string;
	slug: string;
	content: string;
	source: string;
	featuredImage?: string | null;
	activePeriodStart: number;
	activePeriodEnd?: number | null;
	designations: DesignationEntity[];
};

export type HistoricSiteEntity = HistoricSiteEntityConstructor & {
	id: string;
	version: number;
};
