import type {Page} from '../index';
import {Content} from './Content';

export const About: Page = {
	name: 'About',
	route: 'company/about',
	footerMenu: {
		position: 'company',
	},
	Content,
};
