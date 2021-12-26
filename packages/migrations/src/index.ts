import debug from 'debug';
import {MikroORM} from '@mikro-orm/core';
import {mikroOrmConfig} from './core/mikro-orm.config';
import {Migrations} from './Migrations';

const d = debug('terrene.migrations');

MikroORM.init(mikroOrmConfig()).then(orm => {
	const sqlConnection = orm.em.getConnection();

	Migrations.map(async migration => {
		sqlConnection.execute(migration);
	});
});
