import type {Action} from 'terrene-types';
import {Approve} from './Approve';
import {Find} from './Find';
import {FindOne} from './FindOne';
import {FindPending} from './FindPending';
import {Submit} from './Submit';

export const HistoricSite: Action[] = [Submit, Approve, Find, FindOne, FindPending];
