import {HistoricSite} from './HistoricSite';
import {Member} from './Member';
import {Migrations} from './Migration';

export const Actions = [...HistoricSite, ...Member, ...Migrations];
