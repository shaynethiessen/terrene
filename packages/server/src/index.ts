import express from 'express';

import debug from 'debug';

const d = debug('app.server');
const app = express();
const PORT = 3001;
app.listen(PORT, () => {
	d(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

app.get('/', (req, res) => res.send('Express + TypeScript Server'));
