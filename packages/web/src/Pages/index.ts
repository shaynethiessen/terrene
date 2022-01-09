import type {ComponentType} from 'react';
import {Country} from './Country';
import {CountryHistoricSites} from './CountryHistoricSites';
import {Home} from './Home';
import {HistoricSite} from './HistoricSite';
import {Login} from './Login';
import {PrivacyPolicy} from './PrivacyPolicy';
import {TermsAndConditions} from './TermsAndConditions';
import {Admin} from './Admin';
import {Team} from './Team';
import {About} from './About';
import {Members} from './Members';
import {Support} from './Support';
import {Error} from './Error';

export type Page = {
	name: string;
	route: string;
	Content: ComponentType;
};

// Error page needs to always be last on this list. -STT
export const Pages: Page[] = [
	About,
	Admin,
	Country,
	CountryHistoricSites,
	HistoricSite,
	Home,
	Login,
	Members,
	PrivacyPolicy,
	Support,
	Team,
	TermsAndConditions,
	Error,
];
