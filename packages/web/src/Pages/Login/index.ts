import type {Page} from '../index';
import {Content} from './Content';

export const Login: Page = {
	name: 'Login',
	route: 'login',
	mainMenu: {
		order: 1,
		position: 'right',
		icon: 'user circle',
	},
	Content,
};
