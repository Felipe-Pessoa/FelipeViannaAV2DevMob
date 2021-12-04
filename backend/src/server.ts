import express from 'express';
import cors from 'cors';
import PlayerController from './controllers/PlayerController';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.redirect('/players'));
app.get('/players', PlayerController.ranking);
app.post('/players/score', PlayerController.saveScore);

app.listen(PORT);
