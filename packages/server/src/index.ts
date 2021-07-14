import express from 'express';
import cors from 'cors';

import debug from 'debug';
import {historicSites} from './SampleDB';

const d = debug('app.server');
const app = express();
const PORT = 3001;

app.use(cors());

app.listen(PORT, () => {
	d(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.post('/historic-sites', (req, res) => {
	res.send(historicSites).status(200);
});
