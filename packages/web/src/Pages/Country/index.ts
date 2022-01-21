import type {Page} from '../index';
import {Content} from './Content';

export const Country: Page = {
	name: 'Country',
	route: '/country',
	mainMenu: {
		order: 5,
		position: 'left',
	},
	Content,
};
