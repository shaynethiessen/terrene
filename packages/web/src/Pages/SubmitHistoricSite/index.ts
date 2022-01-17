import type {Page} from '../index';
import {Content} from './Content';

export const SubmitHistoricSite: Page = {
	name: 'Submit Historic Site',
	route: 'admin/:memberId/submit-historic-site',
	Content,
};
