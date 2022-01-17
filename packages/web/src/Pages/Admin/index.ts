import type {Page} from '../index';
import {Content} from './Content';

export const Admin: Page = {
	name: 'Admin',
	route: 'admin/:memberId',
	Content,
};
