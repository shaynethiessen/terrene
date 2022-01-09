import {Authenticate} from './Authenticate';
import {GetTeam} from './GetTeam';
import {Login} from './Login';
import type {Action} from 'terrene-types';

export const Member: Action[] = [Authenticate, GetTeam, Login];
