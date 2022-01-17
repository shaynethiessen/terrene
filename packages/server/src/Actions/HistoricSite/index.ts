import type {Action} from 'terrene-types';
import {Submit} from './Submit';
import {Find} from './Find';
import {FindOne} from './FindOne';
import {FindPending} from './FindPending';
import {Approve} from './Approve';

export const HistoricSite: Action[] = [Submit, Approve, Find, FindOne, FindPending];
