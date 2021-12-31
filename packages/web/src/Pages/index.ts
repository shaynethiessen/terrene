import type {ComponentType} from 'react';
import {Error} from './Error';
import {Home} from './Home';
import {HistoricSite} from './HistoricSite';
import {Login} from './Login';
import {PrivacyPolicy} from './PrivacyPolicy';
import {TermsAndConditions} from './TermsAndConditions';
import {Admin} from './Admin';
import {Team} from './Team';
import {About} from './About';
import {Donate} from './Donate';
import {Members} from './Members';
import {Support} from './Support';

export type Page = {
	name: string;
	route: string;
	Content: ComponentType;
	exact?: boolean;
};

// Error page needs to always be last on this list. -STT
export const Pages: Page[] = [About, Admin, Donate, HistoricSite, Home, Login, Members, PrivacyPolicy, Support, Team, TermsAndConditions, Error];
