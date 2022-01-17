import type {Action} from 'terrene-types';
import {Add} from './Add';
import {Find} from './Find';
import {FindOne} from './FindOne';

export const HistoricSite: Action[] = [Add, Find, FindOne];
