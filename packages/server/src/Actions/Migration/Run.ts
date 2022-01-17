import type {EntityManager} from '@mikro-orm/core';
import {ActionTypeEnum} from 'terrene-types';
import {Member} from '../../Entities/Member';
import {Migration} from '../../Entities/Migration';
import {Migrations} from '../../Migrations';

export const Run = {
	path: 'migrations/run',
	type: ActionTypeEnum.post,
	action: async (params: unknown, authorization: string, em: EntityManager): Promise<void> => {
		const member = await em.findOne(Member, {id: authorization});

		if (member) {
			const sqlConnection = em.getConnection();

			Migrations.map(async (migration, index) => {
				const duplicateMigration = await em.find(Migration, {name: migration.name});
				if (duplicateMigration.length === 0) {
					migration.action.map(async action => {
						await sqlConnection.execute(action);

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
		}
	},
};
