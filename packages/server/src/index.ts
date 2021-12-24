import Express from 'express';
import cors from 'cors';
import debug from 'debug';
import {MikroORM} from '@mikro-orm/core';
import {environment} from './core/environment';
import {Actions} from './Actions';
import {mikroOrmConfig} from './core/mikro-orm.config';

const d = debug('terrene.server');

MikroORM.init(mikroOrmConfig()).then(orm => {
	d(orm.em);
	const express = Express();

	express.use(cors());
	express.use(Express.json());

	express.listen(environment.serverPort, () => {
		d(`⚡️[server]: Server is running at https://localhost:${environment.serverPort}`);
	});

	express.get('/', (req, res) => res.send('Express + TypeScript Server'));

	Actions.map(action => {
		express.post(`/${action.path}`, (req, res) => {
			res.send(action.action({...req.body})).status(200);
		});

		return true;
	});
});
