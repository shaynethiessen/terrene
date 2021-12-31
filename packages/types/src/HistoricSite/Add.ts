import type {HistoricSiteEntity} from './Entity';

export type HistoricSiteAddParams = Omit<HistoricSiteEntity, 'id' | 'version'>;
