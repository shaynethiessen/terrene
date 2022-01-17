import type {Action} from 'terrene-types';
import {Add} from './Add';
import {Find} from './Find';
import {FindOne} from './FindOne';
import {FindPending} from './FindPending';
import {Approve} from './Approve';

export const HistoricSite: Action[] = [Add, Approve, Find, FindOne, FindPending];
