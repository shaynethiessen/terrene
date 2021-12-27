import type {EntityManager} from '@mikro-orm/core';
import {Migrations} from '../Migrations';
import {Migration} from '../Entities/Migration';

export const RunMigrations = {
	path: 'migrations',
	action: async (unused: unknown, em: EntityManager) => {
		const sqlConnection = em.getConnection();

		Migrations.map(async (migration, index) => {
			const exists = em.find(Migration, {name: migration.name});
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

				em.persist(mig);

				await em.flush();
			}
		});
		return true;
	},
};
