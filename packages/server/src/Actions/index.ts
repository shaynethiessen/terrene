import {Country} from './Country';
import {HistoricSite} from './HistoricSite';
import {Member} from './Member';
import {Migrations} from './Migration';
import {State} from './State';
import type {Action} from 'terrene-types';

export const Actions: Action[] = [...Country, ...HistoricSite, ...Member, ...Migrations, ...State];
