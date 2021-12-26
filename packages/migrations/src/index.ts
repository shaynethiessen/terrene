import debug from 'debug';
import {MikroORM} from '@mikro-orm/core';
import {mikroOrmConfig} from './core/mikro-orm.config';
import {Migrations} from './Migrations';
import {Migration} from './Entities/Migration';

const d = debug('terrene.migrations');

MikroORM.init(mikroOrmConfig())
	.then(orm => {
		const sqlConnection = orm.em.getConnection();

		Migrations.map(async (migration, index) => {
			const exists = orm.em.find(Migration, {name: migration.name});
			if (!exists) {
				migration.action.map(action => {
					sqlConnection.execute(action);

					return true;
				});

				const mig = new Migration({
					name: migration.name,
					success: true,
					index,
				});

				orm.em.persist(mig);

				await orm.em.flush();
			}
		});
		orm.close();
	})
	.then(() => {
		process.exit(0);
	});
