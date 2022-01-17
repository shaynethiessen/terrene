import type {Action} from 'terrene-types';
import {Authenticate} from './Authenticate';
import {GetTeam} from './GetTeam';
import {Login} from './Login';

export const Member: Action[] = [Authenticate, GetTeam, Login];
