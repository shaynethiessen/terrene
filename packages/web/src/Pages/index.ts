import type {ComponentType} from 'react';
import {About} from './About';
import {Admin} from './Admin';
import {Country} from './Country';
import {CountryHistoricSites} from './CountryHistoricSites';
import {Error} from './Error';
import {HistoricSite} from './HistoricSite';
import {Home} from './Home';
import {Login} from './Login';
import {Members} from './Members';
import {PendingHistoricSites} from './PendingHistoricSites';
import {PrivacyPolicy} from './PrivacyPolicy';
import {SubmitHistoricSite} from './SubmitHistoricSite';
import {Support} from './Support';
import {Team} from './Team';
import {TermsAndConditions} from './TermsAndConditions';

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
	PendingHistoricSites,
	PrivacyPolicy,
	SubmitHistoricSite,
	Support,
	Team,
	TermsAndConditions,
	Error,
];
