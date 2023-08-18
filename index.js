import express from 'express';

import { getTotals } from './electricity.sql.js'

const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 4013;

app.post('/api/topup', (req, res) => {
    // topup the electricity
});

app.post('/api/use', (req, res) => {
    // use a device - electricity goes down
});

app.get('/api/balances', (req, res) => {
    // return all the electricity balances
});

app.listen(PORT, () => console.log(`App started on port: ${PORT}`))