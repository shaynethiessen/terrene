import {HistoricSite} from './HistoricSite';
import {Member} from './Member';
import {Migrations} from './Migrations';

export const Actions = [...HistoricSite, ...Member, ...Migrations];
