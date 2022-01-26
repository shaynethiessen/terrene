import type {CountryEntity} from './Entity';

export type CountryFindReturn = CountryEntity[];
export type CountryFindParams = {withHistoricSites?: boolean | null};
