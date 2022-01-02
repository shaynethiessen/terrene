import {Content} from './Content';
import type {Page} from '../index';

export const Error: Page = {
	name: 'Error',
	route: '*',
	Content,
};
