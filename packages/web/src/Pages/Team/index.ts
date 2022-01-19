import type {Page} from '../index';
import {Content} from './Content';

export const Team: Page = {
	name: 'Team',
	route: 'company/team',
	footerMenu: {
		position: 'company',
	},
	Content,
};
