import debug from 'debug';
import {environment} from './environment';

const d = debug('web.src.server');

export const server = {
	fetch: async (action: string, body?: Record<string, unknown>) => {
		const response = await fetch(`${environment.serverURL}/${action}`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		return response.json();
	},
};
