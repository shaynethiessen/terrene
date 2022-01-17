import type {Page} from '../index';
import {Content} from './Content';

export const Error: Page = {
	name: 'Error',
	route: '*',
	Content,
};
