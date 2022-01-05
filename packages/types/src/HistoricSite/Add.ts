import type {HistoricSiteEntityConstructor} from './Entity';

export type HistoricSiteAddParams = HistoricSiteEntityConstructor & {country: string; state: string};
