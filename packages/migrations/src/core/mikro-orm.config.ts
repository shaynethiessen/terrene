import type {Options} from '@mikro-orm/core';
import {Entities} from '../Entities';
import {environment} from './environment';

export function mikroOrmConfig(): Options {
	return {
		entities: Entities,
		clientUrl: `postgres://${environment.dbUsername}:${environment.dbPassword}@${environment.dbDomain}:${environment.dbPort}/${environment.dbServer}`,
		type: 'postgresql',
		debug: process.env.POSTGRESQL_LOGGING === 'true',
		discovery: {
			disableDynamicFileAccess: true,
		},
		driverOptions:
			process.env.POSTGRESQL_SSL === 'true'
				? {
						connection: {
							ssl: process.env.POSTGRESQL_REJECT_UNAUTHORIZED
								? {
										rejectUnauthorized: process.env.POSTGRESQL_REJECT_UNAUTHORIZED === 'true',
								  }
								: true,
						},
				  }
				: {},
	};
}
