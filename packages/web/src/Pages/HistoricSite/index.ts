import type {Page} from '../index';
import {Content} from './Content';

export const HistoricSite: Page = {
	name: 'Historic Site',
	route: 'historic-site/:slug',
	Content,
};
