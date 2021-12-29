import type {EntityManager} from '@mikro-orm/core';
import {Migrations} from '../../Migrations';
import {Migration} from '../../Entities/Migration';
import {environment} from '../../core/environment';

export const Run = {
	path: 'migrations/run',
	action: async (unused: unknown, em: EntityManager) => {
		// environment variable must be set, before we will run migrations -STT
		if (!environment.admin) return false;
		const sqlConnection = em.getConnection();

		Migrations.map(async (migration, index) => {
			const duplicateMigration = await em.find(Migration, {name: migration.name});
			if (duplicateMigration.length === 0) {
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
			}
		});

		await em.flush();

		return true;
	},
};
