import type {DesignationEntity} from '../Designation';

export type HistoricSiteEntity = {
	id: string;
	version: number;
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
