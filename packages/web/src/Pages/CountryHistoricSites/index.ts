import type {Page} from '../index';
import {Content} from './Content';

export const CountryHistoricSites: Page = {
	name: 'Country Historic Sites',
	route: 'country/:slug',
	Content,
};
