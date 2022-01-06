import Express from 'express';
import cors from 'cors';
import debug from 'debug';
import {MikroORM} from '@mikro-orm/core';
import {environment} from './core/environment';
import {Actions} from './Actions';
import {mikroOrmConfig} from './core/mikro-orm.config';

const d = debug('terrene.server');

MikroORM.init(mikroOrmConfig()).then(orm => {
	const express = Express();

	express.use(cors());
	express.use(Express.json());

	express.use(Express.static('assets'));

	express.listen(environment.serverPort, () => {
		d(`⚡️[server]: Server is running at ${environment.dbDomain}:${environment.serverPort}`);
	});

	express.get('/', (req, res) => res.send('Terrene Server'));

	Actions.map(async action => {
		express.post(`/${action.path}`, (req, res) => {
			action
				.action(req.body.params, req.body.authorization, orm.em)
				.then(value => {
					res.status(200).send(value);
				})
				.catch(() => res.status(500).send());
		});

		return true;
	});
});
