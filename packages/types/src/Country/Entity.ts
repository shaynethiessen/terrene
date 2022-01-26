import type {Collection} from '@mikro-orm/core';
import type {HistoricSiteEntity} from '../HistoricSite';

export type CountryEntityConstructor = {
	name: string;
	slug: string;
	code: string;
	description: string;
};

export type CountryEntity = CountryEntityConstructor & {
	id: string;
	version: number;
	historicSite?: Collection<HistoricSiteEntity> | null;
};
