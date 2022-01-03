import type {EntityManager} from '@mikro-orm/core';
import {Country} from './Country';
import {HistoricSite} from './HistoricSite';
import {Member} from './Member';
import {Migrations} from './Migration';
type Action = {
	path: string;
	action: (params: any, authorization: any, em: EntityManager) => Promise<unknown>;
};

export const Actions: Action[] = [...Country, ...HistoricSite, ...Member, ...Migrations];
