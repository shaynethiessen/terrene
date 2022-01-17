import type {Page} from '../index';
import {Content} from './Content';

export const PendingHistoricSites: Page = {
	name: 'Pending Historic Sites',
	route: 'admin/:memberId/pending-historic-sites',
	Content,
};
