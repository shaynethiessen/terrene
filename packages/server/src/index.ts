import {EntityManager, MikroORM} from '@mikro-orm/core';
import cors from 'cors';
import debug from 'debug';
import Express from 'express';
import type {Request, Response} from 'express';
import {ActionTypeEnum} from 'terrene-types';
import type {ActionCall} from 'terrene-types';
import {Actions} from './Actions';
import {environment} from './core/environment';
import {mikroOrmConfig} from './core/mikro-orm.config';

const d = debug('terrene.server');

function doAction(req: Request, res: Response, em: EntityManager, action: ActionCall) {
	action(req.body.params, req.body.authorization, em)
		.then(value => {
			res.status(200).send(value);
		})
		.catch(() => res.status(500).send());
}

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
		switch (action.type) {
			case ActionTypeEnum.get:
				express.get(`/${action.path}`, (req, res) => doAction(req, res, orm.em, action.action));
				break;
			case ActionTypeEnum.post:
				express.post(`/${action.path}`, (req, res) => doAction(req, res, orm.em, action.action));
				break;
			case ActionTypeEnum.put:
				express.put(`/${action.path}`, (req, res) => doAction(req, res, orm.em, action.action));
				break;
			default:
				break;
		}

		return true;
	});
});
