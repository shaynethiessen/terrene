import type {CountryEntity} from '../Country';
import type {DesignationEntity} from '../Designation';
import type {StateEntity} from '../State';

export type HistoricSiteEntityConstructor = {
	latitude: number;
	longitude: number;
	name: string;
	slug: string;
	content: string;
	source: string;
	featuredImage: string;
	activePeriodStart: number;
	activePeriodEnd?: number | null;
	designations: DesignationEntity[];
	country: CountryEntity;
	state: StateEntity;
};

export type HistoricSiteEntity = HistoricSiteEntityConstructor & {
	id: string;
	version: number;
};
