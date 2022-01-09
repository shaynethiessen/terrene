import {FindOne} from './FindOne';
import {Find} from './Find';
import {Add} from './Add';
import type {Action} from 'terrene-types';

export const HistoricSite: Action[] = [Add, Find, FindOne];
