import {Content} from './Content';
import type {Page} from '../index';

export const PendingHistoricSites: Page = {
	name: 'Pending Historic Sites',
	route: 'admin/:memberId/pending-historic-sites',
	Content,
};
