import type {Page} from '../index';
import {Content} from './Content';

export const Support: Page = {
	name: 'Support',
	route: 'community/support',
	footerMenu: {
		position: 'community',
	},
	Content,
};
