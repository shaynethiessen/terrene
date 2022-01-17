import debug from 'debug';
import {environment} from './environment';

const d = debug('terrene.web.core.server');

export const server = {
	fetch: async (action: string, params?: Record<string, unknown>, authorization?: string, method?: 'POST' | 'PUT') => {
		const response = await fetch(`${environment.serverURL}/${action}`, {
			method: method || 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({params, authorization}),
		});

		let data;
		if (method !== 'PUT') {
			data = await response.json();
		}

		return {data, status: response.status};
	},
};
