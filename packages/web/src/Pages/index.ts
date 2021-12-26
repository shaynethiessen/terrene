import type {ComponentType} from 'react';
import {Error} from './Error';
import {Home} from './Home';
import {HistoricSite} from './HistoricSite';
import {Login} from './Login';

export type Page = {
	name: string;
	route: string;
	Content: ComponentType;
	exact?: boolean;
};

// Error page needs to always be last on this list. -STT
export const Pages: Page[] = [Home, HistoricSite, Login, Error];
