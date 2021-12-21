import debug from 'debug';

const d = debug('web.src.server');

export const server = {
	fetch: async (location: string, body?: Record<string, unknown>) => {
		const response = await fetch(`https://terrene-server.herokuapp.com/`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		return response.json();
	},
};
