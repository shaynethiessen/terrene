import type {EntityManager} from '@mikro-orm/core';
import {Migrations} from '../../Migrations';
import {Migration} from '../../Entities/Migration';
import {environment} from '../../core/environment';
import {Member} from '../../Entities/Member';

export const Run = {
	path: 'migrations/run',
	action: async ({memberId}: {memberId: string}, em: EntityManager) => {
		const member = await em.findOne(Member, {id: memberId});

		if (environment.admin && member) {
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
		}
	},
};
