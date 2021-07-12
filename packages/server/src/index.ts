import express from 'express';
const app = express();
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

