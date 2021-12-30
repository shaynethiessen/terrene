import {Content} from './Content';
import type {Page} from '../index';

export const Admin: Page = {
	name: 'Admin',
	route: 'admin/:memberId',
	Content,
};
