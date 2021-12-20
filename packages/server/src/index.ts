import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import debug from 'debug';
import {historicSites} from './SampleDB';
import {environment} from './environment';

const d = debug('terrene.server');

config();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(environment.serverPort, () => {
	d(`⚡️[server]: Server is running at https://localhost:${environment.serverPort}`);
});

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.post('/historic-sites', (req, res) => {
	res.send(historicSites).status(200);
});

app.post('/historic-site', (req, res) => {
	res.send(historicSites.find(historicSite => historicSite.slug === req.body.slug)).status(200);
});
