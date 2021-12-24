import express from 'express';
import cors from 'cors';
import debug from 'debug';
import {environment} from './core/environment';
import {Actions} from './core/Actions';

const d = debug('terrene.server');

const app = express();

app.use(cors());
app.use(express.json());

app.listen(environment.serverPort, () => {
	d(`⚡️[server]: Server is running at https://localhost:${environment.serverPort}`);
});

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

Actions.map(action => {
	app.post(`/${action.path}`, (req, res) => {
		res.send(action.action({...req.body})).status(200);
	});

	return true;
});
